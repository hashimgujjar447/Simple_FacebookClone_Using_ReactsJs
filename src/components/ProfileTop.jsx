import PropTypes from "prop-types";
import dp from "../assets/images/dp.jpg";

function ProfileTop({ isClicked }) {
  return (
    <div
      className={
        isClicked
          ? "w-full bg-[#fff] flex flex-col items-center shadow-lg blur-sm"
          : "w-full bg-[#fff] flex flex-col items-center shadow-lg"
      }
    >
      <div className="w-full lg:w-[70%] h-[300px] relative flex justify-center items-center shadow-lg rounded-lg z-10">
        <img
          src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-6/279675843_1622714218101436_1635733392830518032_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFy68B6qeaaKfLYZmJDgTyaJgXqpgZ81H8mBeqmBnzUf_7iJPIFCg7FzLwcXucLMQmwzn3Ub6-rMAE2nTkCEgzb&_nc_ohc=NZBfnB2Pi4AQ7kNvgEcxqCc&_nc_zt=23&_nc_ht=scontent.flyp3-1.fna&_nc_gid=AgkFS3qrJMsgHM9QSanc4UH&oh=00_AYAQCQKy8IkBhKl0KS9eNJl6QVB8Ld3_MuuqK3gbOQir3g&oe=679D6438"
          alt=""
          className="w-full h-full object-cover shadow-lg rounded-lg"
        />
        <button className="px-3 py-1 rounded-lg absolute bottom-2 right-4 bg-[#fff] hover:bg-[#f2f2f2] text-lg font-medium">
          Edit image
        </button>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center md:px-5 w-full lg:px-20 xl:px-48">
        <div className="flex flex-col md:flex-row md:gap-2 md:justify-center md:items-center lg:justify-start lg:items-start">
          <div className="w-[150px] h-[150px] bg-white rounded-full relative -top-12 left-5 md:left-0 z-10 flex justify-end md:justify-center items-center shadow-lg">
            <img src={dp} className="w-[140px] h-[140px] rounded-full" alt="" />
          </div>
          <div className="md:pt-4">
            <h1 className="text-2xl font-bold mb-2">Muhammad Hashim</h1>
            <p className="text-[#65686c] font-medium mb-2 text-center md:text-start">
              766 friends
            </p>
            <div className="flex justify-center md:justify-start gap-1">
              {/* Add smaller images for friends */}
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-1/405317294_1019739495742622_5609247085581743593_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEuuI_hpGeneYFpYi7B8bvAJz1hHLoxSFYnPWEcujFIVuZ7VjAGe_mHQT9KQFLd1lie7UcBJO8GDmGRNeBp9mmZ&_nc_ohc=GtsPHTq7w6kQ7kNvgFtHiVO&_nc_zt=24&_nc_ht=scontent.flyp3-1.fna&_nc_gid=AWDJbCN5CEjzmSfb-tmf188&oh=00_AYBNR1Y0Hl8fVYqV0HMSJxQnvvdqwrVOuQK5U9In6lNRaA&oe=679D6680"
                  alt=""
                  className="w-[25px] h-[25px] rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-1 relative top-4 flex-wrap">
          <button className="px-4 py-1 rounded-lg text-white bg-[#0861f2] cursor-pointer text-lg font-medium">
            <span className="text-xl">+</span> Add to story
          </button>
          <button className="px-4 py-1 rounded-lg bg-[#d6d9dd] hover:bg-[#f2f2f2] cursor-pointer text-lg font-medium">
            <span className="text-black">🖊</span> Edit profile
          </button>
          <p className="px-4 py-1 rounded-lg bg-[#d6d9dd] hover:bg-[#f2f2f2] cursor-pointer text-lg font-medium">
            <i className="fa-solid fa-caret-down "></i>
          </p>
        </div>
      </div>
      <hr className="border-[#ced1d4] border-1 relative top-10 lg:-top-5 z-20 w-[70%]" />

      <div className="w-full md:px-5 lg:px-20 xl:px-48">
        <ul className="flex gap-1 p-2 md:gap-3 active_text mt-10 md:mt-14 lg:mt-0 flex-wrap">
          <li className="text-[#0866ff] font-medium px-5 py-2 active-link  mb-2  cursor-pointer relative rounded-lg  hover:bg-[#f2f2f2]">
            Posts
          </li>
          <li className="text-[#0866ff] font-medium px-5 py-2 mb-2   cursor-pointer rounded-lg relative hover:bg-[#f2f2f2]">
            About
          </li>
          <li className="text-[#0866ff] font-medium px-5 py-2 mb-2  cursor-pointer rounded-lg relative hover:bg-[#f2f2f2]">
            Friends
          </li>
          <li className="text-[#0866ff] font-medium px-5 py-2 mb-2  cursor-pointer rounded-lg relative hover:bg-[#f2f2f2]">
            Photos
          </li>
          <li className="text-[#0866ff] font-medium px-5 py-2 mb-2  cursor-pointer rounded-lg relative hover:bg-[#f2f2f2]">
            Videos
          </li>
          <li className="text-[#0866ff] font-medium px-5 py-2  mb-2 cursor-pointer rounded-lg relative hover:bg-[#f2f2f2]">
            Reels
          </li>
          <li className="text-[#0866ff] font-medium px-5 py-2 mb-2  cursor-pointer rounded-lg relative hover:bg-[#f2f2f2]">
            More
          </li>
        </ul>
      </div>
    </div>
  );
}

ProfileTop.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};

export default ProfileTop;
