import { useState } from "react";

function Posts() {
  const [likes, setLikes] = useState({
    1: { count: 3, liked: false },
    2: { count: 3, liked: false },
    3: { count: 3, liked: false },
    4: { count: 3, liked: false },
  });
  const [likeBtn, setLikeBtn] = useState();

  const posts = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "Had an amazing hike today! The views were breathtaking.",
      time: "2 min",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      content: "Just finished reading a fantastic book. Highly recommend it!",
      time: "5 min",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "Celebrating my birthday with friends and family. So grateful!",
      time: "10 min",
    },
    {
      id: 4,
      name: "David Lee",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      content: "A relaxing day at the beach. The weather is perfect!",
      time: "15 min",
    },
  ];

  function handleLike(currentId) {
    setLikes((prevLikes) => {
      const currentLikeState = prevLikes[currentId];
      const newLikeState = currentLikeState.liked
        ? { count: currentLikeState.count - 1, liked: false }
        : { count: currentLikeState.count + 1, liked: true };

      return { ...prevLikes, [currentId]: newLikeState };
    });
  }

  return (
    <div className="max-w-full md:max-w-2xl lg:max-w-4xl mx-auto p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full flex flex-col bg-white rounded-lg mt-5 mb-5 p-4 sm:p-3"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={post.image}
                alt="post image"
                className="w-11 h-11 rounded-full"
              />
              <div>
                <h1 className="font-semibold text-xs sm:text-base mr-1 md:mr-0 ">
                  {post.name}
                </h1>
                <p className="text-xs text-gray-500 ">{post.time}</p>
              </div>
            </div>
            <div className="flex items-center md:gap-4 gap-2">
              <i className="fa-solid fa-bars hover:bg-[#f2f2f2] md:p-2 rounded-full hover:cursor-pointer text-[#606366] "></i>
              <i className="fa-solid fa-x text-[#606366] hover:bg-[#f2f2f2] hover:cursor-pointer p-2 rounded-full"></i>
            </div>
          </div>

          <div>
            <p className="mt-3 mb-3 text-sm sm:text-base">{post.content}</p>
          </div>

          <div className="w-full mb-2">
            <img
              src={post.image}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
              alt="Post Image"
            />
          </div>

          <div className="flex justify-between items-center m-2 mb-4">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-thumbs-up text-white p-1 text-xs bg-blue-600 rounded-full"></i>
              <p className="text-sm text-[#6a6d71]">
                {" "}
                {likes[post.id]?.liked ? likes[post.id]?.count : 3}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-[#6a6d71]">2</p>
              <i className="fa-solid fa-comment text-[#606770] hover:text-[#1877f2] hover:cursor-pointer"></i>
            </div>
          </div>

          <hr className="border-[#d0d3d7] mb-4" />
          <div>
            <div className="flex items-center justify-between  md:justify-around">
              <div
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-2 hover:bg-[#f2f2f2] p-2 px-2  sm:px-4 hover:rounded-lg hover:cursor-pointer"
              >
                <i
                  className={
                    likes[post.id]?.liked
                      ? "fa-regular fa-thumbs-up text-xl text-[#1877f2]"
                      : "fa-regular fa-thumbs-up text-xl text-[#6c7279]"
                  }
                ></i>
                <p
                  className={
                    likes[post.id]?.liked
                      ? "font-medium text-[#1877f2]"
                      : "font-medium text-[#606366]"
                  }
                >
                  Like
                </p>
              </div>
              <div className="flex items-center gap-2 hover:bg-[#f2f2f2] p-2 px-2 sm:px-4 hover:rounded-lg hover:cursor-pointer">
                <i className="fa-regular fa-comment text-[#6c7279] text-xl"></i>
                <p className="font-medium text-[#606366] ">Comment</p>
              </div>

              <div className="flex items-center gap-2 hover:bg-[#f2f2f2] p-2 px-2 sm:px-4 hover:rounded-lg hover:cursor-pointer">
                <i className="fa-solid fa-share text-[#6c7279] text-xl"></i>
                <p className="font-medium text-[#606366] ">Share</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
