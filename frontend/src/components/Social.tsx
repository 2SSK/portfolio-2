const emailId = "sauravchp2@gmail.com";
const github = "2SSK";
const linkedin = "2ssk";
const twitter = "_2ssk";

const Social = () => {
  return (
    <div className="flex">
      <div className="flex gap-2 w-[200px]">
        <div className="flex flex-col text-xl text-textColor gap-1">
          <li className="fa-solid fa-envelope"></li>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
        </div>
        <div className="text-gray-400">
          <p>Email</p>
          <p>GitHub</p>
          <p>Linkedin</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="flex flex-col underline text-customBlue text-md">
        <a target="_blank" href={`mailto:${emailId}`}>
          {emailId}
        </a>
        <a target="_blank" href={`https://github.com/${github}`}>
          github/{github}
        </a>
        <a target="_blank" href={`https://linkedin.com/in/${linkedin}`}>
          linkedin/{linkedin}
        </a>
        <a target="_blank" href={`https://x.com/${twitter}`}>
          twitter/{twitter}
        </a>
      </div>
    </div>
  );
};

export default Social;
