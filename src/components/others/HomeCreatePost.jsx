import dp from "../../assets/images/dp.jpg";

function HomeCreatePost() {
  return (
    <div className="flex flex-col bg-white rounded-lg p-5 md:p-8 max-w-full md:max-w-2xl lg:max-w-4xl sm:mx-auto ">
      <div className="flex items-center gap-4">
        <img
          src={dp}
          alt="My profile dp"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        />
        <input
          type="text"
          className="bg-[#f2f2f2] w-full p-2 md:p-3 rounded-full text-lg outline-none"
          placeholder="What's in your mind ? Muhammad"
        />
      </div>
      <hr className="border-1 border-top-1 border-[#e2e5e9] mt-3" />
      <div className="mt-6 mb-1">
        <ul className="flex flex-col md:flex-row justify-around gap-4 md:gap-0">
          <li className="flex items-center gap-2">
            <i className="fa-solid fa-video text-[#e42645]"></i>
            <p className="text-[#606366] font-medium">Live Video</p>
          </li>
          <li className="flex items-center gap-2">
            <i className="fa-regular fa-image text-[#41b35d]"></i>
            <p className="text-[#606366] font-medium">Photos/Videos</p>
          </li>
          <li className="flex items-center gap-2">
            <i className="fa-regular fa-face-smile text-[#eab026]"></i>
            <p className="text-[#606366] font-medium">Feeling/activity</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeCreatePost;
