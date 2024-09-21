import { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { inputState, focusInputState } from "../store/atom/atom";

export default function TerminalInput({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  return (
    <div className="w-full flex flex-col items-start justify-center text-lg">
      {" "}
      <p className="text-textColor font-bold mb-1">
        ssk<span className="text-foreground">@</span>
        archBTW ~
      </p>
      <div className="flex mb-6">
        <span className="text-primary text-lg font-bold mr-2">&gt;</span>
        <TerminalInputBox inputRef={inputRef} />
      </div>
    </div>
  );
}

const TerminalInputBox = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  const setInputData = useSetRecoilState(inputState);
  const focusInput = useRecoilValue(focusInputState);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setInputData(inputValue.trim());
      setInputValue("");

      if (typeof focusInput === "function") {
        focusInput();
      }
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      autoFocus
      className="border-none w-[800px] focus:outline-none text-gray-400 flex-1 bg-transparent"
    />
  );
};
