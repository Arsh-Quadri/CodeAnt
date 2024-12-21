import subtract from "../assets/subtract.png";
import smallLogo from "../assets/smallLogo.png";
import lgimage from "../assets/lgimage.png";
import arrow from "../assets/small-right.png";
import github from "../assets/github.png";
import bitbucket from "../assets/bitbucket.png";
import azure from "../assets/azure.png";
import gitlab from "../assets/gitlab.png";
import key from "../assets/key.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [component, setcomponent] = useState("saas");
  const stats = [
    { value: "30+", label: "Language Support" },
    { value: "10K+", label: "Developers" },
    { value: "100K+", label: "Hours Saved" },
  ];
  const primaryOptions = [
    { imgSrc: github, alt: "Github Icon", text: "Sign in with GitHub" },
    {
      imgSrc: bitbucket,
      alt: "Bitbucket Icon",
      text: "Sign in with Bitbucket",
    },
    { imgSrc: azure, alt: "Azure Icon", text: "Sign in with Azure Devops" },
    { imgSrc: gitlab, alt: "GitLab Icon", text: "Sign in with GitLab" },
  ];

  const alternativeOptions = [
    { imgSrc: gitlab, alt: "GitLab Icon", text: "Self Hosted GitLab" },
    { imgSrc: key, alt: "SSO Icon", text: "Sign in with SSO" },
  ];

  return (
    <div className="w-full flex h-screen">
      {/* Left Part */}
      <div className="left hidden lg:block w-[50%] left-0 h-full">
        <img
          src={subtract}
          alt="CodeAnt Logo"
          className="w-[230px] absolute bottom-0"
        />
        <div className="mx-auto mt-[15%] w-fit -z-10 h-fit rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col w-full">
            <p className="p-3 px-4 flex gap-3 justify-start items-center">
              <img src={smallLogo} alt="Small Logo" className="w-[24px]" />
              <span className=" font-medium">
                AI to Detect & Autofix Bad Code
              </span>
            </p>
            <hr />
            <div className="w-full p-3 px-4 pb-5 flex gap-7 justify-center items-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-sm">
                  <span className="font-medium text-lg">{stat.value}</span>
                  <br />
                  {stat.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto p-3 px-4 w-[30%] h-fit rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] z-10  bg-white -translate-y-4 translate-x-24">
          <div className="w-full flex justify-center items-center gap-[3vw]">
            <img src={lgimage} alt="login image" className="w-[56px]" />
            <div className="text-center">
              <div className="flex justify-center items-center gap-1">
                <img src={arrow} alt="small arrow" />
                <span className="font-medium text-[#0049C6]">14%</span>
              </div>
              <span className="text-sm">This Week</span>
            </div>
          </div>
          <div className="text-center pt-2 flex flex-col items-start font-medium">
            Issues Fixed <br />{" "}
            <span className="text-2xl font-bold">500K+</span>
          </div>
        </div>
      </div>
      {/* Right Part */}
      <div className="right w-[100%] lg:w-[50%] right-0 h-full bg-[#FAFAFA]">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="box1 w-[93%] md:w-[90%] pb-4 h-[455px] bg-white border flex flex-col  items-center border-[#E9EAEB] rounded-lg">
            <h2 className="flex justify-center items-center gap-3 py-5">
              <img src={smallLogo} alt="small logo" />
              <span className="text-lg md:text-2xl">CodeAnt AI</span>
            </h2>
            <h2 className="text-lg md:text-2xl font-medium">
              Welcome to CodeAnt AI
            </h2>
            <div className="mt-5 font-medium flex justify-center items-center bg-[#FAFAFA] border border-[#E9EAEB] rounded-lg w-[90%] ">
              <div
                className={`w-[50%] left-0 cursor-pointer text-center md:text-lg ${
                  component == "saas"
                    ? "py-2.5 rounded-lg bg-[#1570EF] text-white"
                    : ""
                } `}
                onClick={() => setcomponent("saas")}
              >
                SAAS
              </div>
              <div
                className={`w-[50%] left-0 text-center cursor-pointer md:text-lg ${
                  component == "selfhosted"
                    ? "py-2.5 rounded-lg bg-[#1570EF] text-white"
                    : ""
                }`}
                onClick={() => setcomponent("selfhosted")}
              >
                Self Hosted
              </div>
            </div>
            <hr className="w-full mt-5 mb-4" />
            {component == "saas" ? (
              // SAAS Options
              <div className="flex flex-col w-full gap-2 sm:gap-3">
                {primaryOptions.map((option, index) => (
                  <div
                    key={index}
                    className="mx-auto flex gap-3 justify-center text-sm md:text-base items-center border border-[#D8DAE5] hover:bg-[#FAFAFA] rounded-lg w-[85%] sm:w-[60%] font-medium py-2.5 cursor-pointer"
                    onClick={() => navigate("/repositories")}
                  >
                    <img src={option.imgSrc} alt={option.alt} />
                    {option.text}
                  </div>
                ))}
              </div>
            ) : (
              // Self Hosted Options
              <div className="flex flex-col w-full gap-2 sm:gap-3">
                {alternativeOptions.map((option, index) => (
                  <div
                    key={index}
                    className="mx-auto flex gap-3 justify-center text-sm md:text-base items-center border border-[#D8DAE5] hover:bg-[#FAFAFA] rounded-lg w-[85%] sm:w-[60%] font-medium py-2.5 cursor-pointer"
                    onClick={() => navigate("/repositories")}
                  >
                    <img src={option.imgSrc} alt={option.alt} />
                    {option.text}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4 text-xs md:text-base">
            By signing up you agree to the{" "}
            <span className="font-bold">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
