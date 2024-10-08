import InfoRow from "./InfoRow";
import UptimeComponent from "./UptimeComponent";

interface NeofetchProps {
  PFP: string;
}

const Neofetch: React.FC<NeofetchProps> = ({ PFP }) => {
  return (
    <div className="w-[90%] sm:w-[50%]  px-4 py-4  bg-opacity-60 rounded-lg flex flex-col md:flex-row items-start sm:items-center gap-[80px] bg-[#1a1b26]">
      <div>
        <img
          src={PFP}
          alt="ASCII Profile"
          className="w-full sm:w-[300px] rounded-md"
        />
      </div>
      <div className="w-full whitespace-pre leading-relaxed flex flex-col gap-1 md:gap-2">
        <InfoRow label="User" value="ssk" />
        <InfoRow label="Host" value="archBTW" />
        <InfoRow label="Uptime" value={<UptimeComponent />} />
        <InfoRow label="Shell" value="zsh" />
        <InfoRow label="Editor" value="Neovim" />
        <InfoRow label="OS" value="Arch Linux" />
        <InfoRow label="Hobby" value="Tinkering with Linux" />
        <InfoRow label="Quote" value='"I use arch BTW 🐧"' />
      </div>
    </div>
  );
};

export default Neofetch;
