import { Link } from "react-router-dom";
import ball from "../assets/images/ball.png";
import cricket from "../assets/images/cricket.jpg";
import dpImage from "../assets/images/dp.jpg";
import qabil from "../assets/images/qabil.jpg";
import turkish from "../assets/images/turkish.jpg";

function SideBar() {
  return (
    <div className="w-full h-full ">
      <ul className="flex flex-col justify-center gap-4">
        <li className="flex items-center gap-2  px-4 py-2 rounded-lg  hover:bg-[#e6e8ea] ">
          <Link to="/profile" className="flex items-center gap-2">
            <img
              src={dpImage}
              className="w-7 h-7 rounded-full "
              alt="Image not found"
            />
            <h1 className="font-medium text-lg">Muhammad Hashim</h1>
          </Link>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea] hover:cursor-pointer">
          <i className="fa-solid fa-user-group text-lg text-[#62cfc0]"></i>
          <p className="text-base font-medium"> Friends</p>
        </li>
        <li className="flex items-center  px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <i className="fa-regular fa-clock text-lg  text-[#2296e5]"></i>
          <p className="text-base font-medium pl-0.5"> Memories</p>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <i className="fa-solid fa-bookmark text-lg text-[#bb3bb0]"></i>
          <p className="text-base font-medium pl-1.5"> Saved</p>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <i className="fa-solid fa-users text-lg text-[#22a7f1]"></i>
          <p className="text-base font-medium "> Group</p>
        </li>
        <li className="flex items-center   px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <i className="fa-solid fa-film text-lg text-[#46b6cc]"></i>
          <p className="text-base font-medium pl-1"> Video</p>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <i className="fa-solid fa-shop text-lg text-[#209eee]"></i>
          <p className="text-base font-medium"> MarketPlace</p>
        </li>

        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <i className="fa-solid fa-circle-chevron-down text-lg "></i>
          <p className="text-base font-medium"> See More</p>
        </li>
      </ul>

      <hr className="mt-5 border-t-1 border-[#d0d3d7]" />

      <ul className="mt-4 flex flex-col justify-center gap-4">
        <h1 className=" px-4 py-2 text-xl font-bold text-[#65686c]">
          Your Shortcuts
        </h1>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <img
            src={cricket}
            alt="cricket group"
            className="w-9 h-9 rounded-lg"
          />
          <p className="text-base font-medium pl-1">
            The Sarcastic cricket group
          </p>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <img src={qabil} alt="cricket group" className="w-9 h-9 rounded-lg" />
          <p className="text-base font-medium pl-1"> Bano Qabil</p>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <img src={ball} alt="cricket group" className="w-9 h-9 rounded-lg" />
          <p className="text-base font-medium pl-1"> 8 Ball pool</p>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-[#e6e8ea]  hover:cursor-pointer">
          <img
            src={turkish}
            alt="cricket group"
            className="w-9 h-9 rounded-lg"
          />
          <p className="text-base font-medium pl-1"> Turkish series</p>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
