import smallLogo from "../assets/smallLogo.png";
import down from "../assets/chevron-down.png";
import code from "../assets/code.png";
import home from "../assets/home.png";
import blackhome from "../assets/blackhome.png";
import cloud from "../assets/cloud.png";
import book from "../assets/book.png";
import gear from "../assets/gear.png";
import phone from "../assets/phone.png";
import signout from "../assets/sign-out.png";
import refresh from "../assets/refresh.png";
import plus from "../assets/plus.png";
import search from "../assets/search.png";
import ellipse from "../assets/ellipse.png";
import database from "../assets/database.png";
import bars from "../assets/bars.png";
import close from "../assets/close.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuItem from "./MenuItem";

const Repository = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const repositories = [
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "JavaScript",
      size: "5871 KB",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      language: "Java",
      size: "6210 KB",
      updated: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updated: "4 days ago",
    },
    {
      name: "social-network",
      visibility: "Public",
      language: "PHP",
      size: "5432 KB",
      updated: "7 days ago",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Backdrop layer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-10 bg-gray-500 opacity-50 z-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Navbar for smaller screen */}
      <div className="Navbar w-full flex justify-between items-center md:hidden px-2.5 sm:px-5 py-2">
        <p className="flex gap-2 justify-start items-center cursor-pointer">
          <img src={smallLogo} alt="Small Logo" className="w-[24px]" />
          <span className="text-2xl">CodeAnt AI</span>
        </p>
        {isOpen ? (
          <img
            src={close}
            alt="cross"
            className="w-[14px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <img
            src={bars}
            alt="hamberger"
            className="w-[18px] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
        {/* Navbar Component for Small Screen */}
        {isOpen && (
          <div className="absolute top-10 pb-2  w-[99.5vw] -translate-x-2 flex flex-col justify-center items-center bg-white">
            <div className="flex justify-between items-center w-[95%] gap-3 px-2 py-1 mt-3 cursor-pointer rounded-md border border-[#E9EAEB]">
              <span>UtkarshDhairyaPanwar</span>
              <img src={down} alt="Down Icon" className="w-[13.51px]" />
            </div>
            <MenuItem icon={blackhome} label="Repositories" />
            <MenuItem icon={code} label="AI Code Review" />
            <MenuItem icon={cloud} label="Cloud Security" />
            <MenuItem icon={book} label="How to Use" />
            <MenuItem icon={gear} label="Settings" />
            <MenuItem icon={phone} label="Support" />
            <MenuItem
              icon={signout}
              label="Logout"
              onClick={() => navigate("/login")}
            />
          </div>
        )}
      </div>
      {/* Left Side bar */}
      <div className="left relative hidden md:flex w-[17%] min-w-[232px] flex-col justify-between h-screen px-3 text-[#181D27]">
        {/* Top Section */}
        <div>
          <p className="mt-3 mb-2 flex gap-3 justify-start items-center cursor-pointer">
            <img src={smallLogo} alt="Small Logo" className="w-[24px]" />
            <span className="text-2xl">CodeAnt AI</span>
          </p>
          <div className="flex justify-center items-center w-fit gap-3 px-5 py-1 cursor-pointer rounded-md border border-[#E9EAEB]">
            <span>UtkarshDhairyaPa...</span>
            <img src={down} alt="Down Icon" className="w-[13.51px]" />
          </div>
          <div className="flex justify-start items-center gap-3 px-4 py-2 mt-2 rounded-md font-medium bg-[#1570EF] hover:bg-[#0059d6] text-white w-[95%] cursor-pointer">
            <img src={home} alt="Home" />
            <span>Repositories</span>
          </div>
          <MenuItem icon={code} label="AI Code Review" />
          <MenuItem icon={cloud} label="Cloud Security" />
          <MenuItem icon={book} label="How to Use" />
          <MenuItem icon={gear} label="Settings" />
        </div>

        {/* Bottom Section */}
        <div>
          <MenuItem icon={phone} label="Support" />
          <MenuItem
            icon={signout}
            label="Logout"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
      {/* right Side */}
      <div className="right w-full md:w-[83%] p-0 md:p-4 h-[90vh] md:h-screen flex justify-center items-center bg-[#FAFAFA]">
        <div className="w-full flex flex-col bg-white text-[#181D27] h-full md:h-[95vh] border border-[#E9EAEB] md:rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2.5 sm:px-5 py-3 gap-2 sm:gap-0">
            <h3 className="text-2xl font-[600] flex flex-col justify-center items-start">
              <span>Repositories</span>
              <span className="text-sm font-normal text-[#414651]">
                33 total repositories
              </span>
            </h3>
            <div className="flex justify-center items-center gap-2 sm:gap-3 text-sm font-medium">
              <div className="flex justify-center items-center gap-2 px-3 sm:px-4 py-2 border border-[#D5D7DA] hover:bg-[#FAFAFA] cursor-pointer rounded-lg">
                <img src={refresh} alt="Refresh" />
                <span>Refresh All</span>
              </div>
              <div className="flex justify-center bg-[#1570EF] hover:bg-[#0059d6] cursor-pointer items-center text-white gap-2 px-3 sm:px-4 py-2 rounded-lg">
                <img src={plus} alt="Plus" />
                <span>Add Repository</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] min-w-[200px] flex justify-start items-center mx-2.5 sm:mx-5 gap-3 px-3 py-2 border border-[#D5D7DA] rounded-lg">
            <img src={search} alt="Search Icon" className="w-[15px] pt-0.5" />
            <input
              type="text"
              className="text-[#414651] placeholder:text-[#414651] outline-none w-full"
              placeholder="Search Repositories"
            />
          </div>
          <hr className="w-full mt-4" />
          {/* Loop through Repositories data */}
          <div className="w-full overflow-scroll overflow-x-hidden">
            {repositories.map((repo, index) => (
              <div
                key={index}
                className="w-full flex py-4 flex-col items-start justify-center px-2.5 sm:px-5 gap-2 border-t border-b border-[#D5D7DA] hover:bg-[#F5F5F5] cursor-pointer"
              >
                <div className="flex justify-center items-center gap-3">
                  <p className="text-lg font-medium">{repo.name}</p>
                  <span className="text-xs px-2 font-[400] bg-sky-50 py-0.5 border border-[#B2DDFF] text-[#175CD3] rounded-full">
                    {repo.visibility}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-3 sm:gap-8">
                  <div className="flex justify-center text-xs sm:text-sm font-[400] items-center gap-1">
                    <span>{repo.language}</span>
                    <img src={ellipse} alt="dot" />
                  </div>
                  <div className="flex justify-center text-xs sm:text-sm font-[400] items-center gap-1">
                    <img src={database} alt="Database Icon" />
                    <span>{repo.size}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-[400]">
                    Updated {repo.updated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
