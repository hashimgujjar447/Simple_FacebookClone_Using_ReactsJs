import "./home.css";

import HomeContent from "../../components/HomeContent";
import HomeRightSideBar from "../../components/HomeRightSideBar";
import SideBar from "../../components/SideBar";

function Home() {
  return (
    <div className="mt-20 w-full h-[calc(100vh-80px)] grid grid-cols-12 gap-4 overflow-hidden">
      <div
        id="sidebar"
        key="sidebar"
        className="hidden lg:block col-span-3 h-full overflow-y-auto px-5 py-1"
      >
        <SideBar />
      </div>
      <div
        key="home-content"
        id="home-content"
        className="col-span-12 lg:col-span-6 h-full overflow-y-auto md:px-15 py-1"
      >
        <HomeContent />
      </div>
      <div
        key="home-right-sidebar"
        id="home-right-sidebar"
        className="hidden lg:block col-span-3 h-full overflow-y-auto px-10 py-1"
      >
        <HomeRightSideBar />
      </div>
    </div>
  );
}

export default Home;
