import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import dp from "../../assets/images/dp.jpg";

function HomeStories() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true, // Enable swipe on mobile
    swipe: true,

    responsive: [
      {
        breakpoint: 1024, // Laptops and below
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-5 max-w-full md:max-w-2xl lg:max-w-4xl mx-auto p-4">
      <Slider {...settings}>
        {/* Story 1 */}
        <div className="h-[250px] w-full bg-white rounded-lg shadow-md flex flex-col items-center hover:bg-[#e5e5e5] duration-200 relative hover:cursor-pointer px-1">
          <div className="image w-full h-[200px] flex justify-center items-center relative">
            <img
              src={dp}
              className="w-full h-full rounded-t-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Story 1"
            />
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white h-10 w-10 flex justify-center items-center rounded-full shadow-md">
              <i className="fa-solid fa-plus bg-[#075ce5] text-[#ffff] p-2 rounded-full"></i>
            </div>
          </div>

          <div className="title mt-4 text-center"></div>
          <h1 className="font-medium text-sm">Create Story</h1>
        </div>

        {/* Story 2 */}
        <div className="h-[250px] w-full bg-white rounded-lg shadow-md flex flex-col items-center hover:bg-[#e5e5e5] duration-200 relative cursor-pointer ">
          <div className="image w-full h-full flex justify-center items-center relative">
            <img
              src={dp}
              className="w-full h-full rounded-lg object-cover cursor-pointer hover:scale-100 transition-transform duration-300 ease-in-out"
              alt="Story 2"
            />
            <h1 className="font-bold text-sm text-white absolute bottom-1 left-3">
              Hashim
            </h1>
          </div>
          <div className="absolute top-2 left-2 bg-[#075ce5] h-10 w-10 flex justify-center items-center rounded-full shadow-md">
            <img
              src={dp}
              className="w-8 h-8 rounded-full"
              alt="Image not found"
            />
          </div>
        </div>

        {/* Story 3 */}
        <div className="h-[250px] w-full bg-white rounded-lg shadow-md flex flex-col items-center hover:bg-[#e5e5e5] duration-200 relative cursor-pointer ">
          <div className="image w-full h-full flex justify-center items-center relative">
            <img
              src={dp}
              className="w-full h-full rounded-lg object-cover cursor-pointer hover:scale-100 transition-transform duration-300 ease-in-out"
              alt="Story 3"
            />
            <h1 className="font-bold text-sm text-white absolute bottom-1 left-3">
              Hashim
            </h1>
          </div>
          <div className="absolute top-2 left-2 bg-[#075ce5] h-10 w-10 flex justify-center items-center rounded-full shadow-md">
            <img
              src={dp}
              className="w-8 h-8 rounded-full"
              alt="Image not found"
            />
          </div>
        </div>

        {/* Story 4 */}
        <div className="h-[250px] w-full bg-white rounded-lg shadow-md flex flex-col items-center hover:bg-[#e5e5e5] duration-200 relative cursor-pointer ">
          <div className="image w-full h-full flex justify-center items-center relative">
            <img
              src={dp}
              className="w-full h-full rounded-lg object-cover cursor-pointer hover:scale-100 transition-transform duration-300 ease-in-out"
              alt="Story 4"
            />
            <h1 className="font-bold text-sm text-white absolute bottom-1 left-3">
              Hashim
            </h1>
          </div>
          <div className="absolute top-2 left-4 bg-[#075ce5] h-10 w-10 flex justify-center items-center rounded-full shadow-md">
            <img
              src={dp}
              className="w-8 h-8 rounded-full"
              alt="Image not found"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeStories;
