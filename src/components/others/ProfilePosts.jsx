import dp from "../../assets/images/dp.jpg";
import { useFacebookContext } from "../../context/facebookContext";
import { useState } from "react";

function ProfilePosts({ isClicked }) {
  const { users, setUsers } = useFacebookContext();

  function handleDeletePost(id) {
    console.log(users);
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        return { ...user, post: user.post.filter((post) => post.id !== id) };
      });

      localStorage.setItem("AvailableUsers", JSON.stringify(updatedUsers));

      return updatedUsers;
    });
  }

  function handleLikeBtn(id) {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        return {
          ...user,
          post: user.post.map((post) =>
            post.id === id
              ? {
                  ...post,
                  likes: {
                    count: post.likes.liked
                      ? post.likes.count - 1
                      : post.likes.count + 1,
                    liked: !post.likes.liked,
                  },
                }
              : post
          ),
        };
      });

      localStorage.setItem("AvailableUsers", JSON.stringify(updatedUsers));

      return updatedUsers;
    });
  }

  return (
    <div
      className={
        isClicked
          ? "w-full md:max-w-2xl lg:max-w-4xl mx-auto p-4 blur-sm"
          : "w-full md:max-w-2xl lg:max-w-4xl mx-auto p-4"
      }
    >
      {users.map((user) =>
        user.post && user.post.length > 0
          ? user.post.map((post) => (
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
                        {post?.name || "Muhammad hashim"}
                      </h1>
                      <p className="text-xs text-gray-500 ">{post.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center md:gap-4 gap-2">
                    <i className="fa-solid fa-bars hover:bg-[#f2f2f2] md:p-2 rounded-full hover:cursor-pointer text-[#606366] "></i>
                    <i
                      onClick={() => handleDeletePost(post.id)}
                      className="fa-solid fa-x text-[#606366] hover:bg-[#f2f2f2] hover:cursor-pointer p-2 rounded-full"
                    ></i>
                  </div>
                </div>

                <div>
                  <p className="mt-3 mb-3 text-sm sm:text-base">
                    {post.content}
                  </p>
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
                    <p className="text-sm text-[#6a6d71]">{post.likes.count}</p>
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
                      onClick={() => handleLikeBtn(post.id)}
                      className="flex items-center gap-2 hover:bg-[#f2f2f2] p-2 px-2  sm:px-4 hover:rounded-lg hover:cursor-pointer"
                    >
                      <i
                        className={
                          { ...post.likes }.liked
                            ? "fa-regular fa-thumbs-up text-xl text-[#1877f2]"
                            : "fa-regular fa-thumbs-up text-xl text-[#6c7279]"
                        }
                      ></i>
                      <p
                        className={
                          { ...post.likes }.liked
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
            ))
          : null
      )}
    </div>
  );
}

export default ProfilePosts;
