import { useEffect, useState } from "react";

import dp from "../assets/images/dp.jpg";
import { useFacebookContext } from "../context/facebookContext";

function ProfileCreatePost({ isClicked, setIsClicked }) {
  const [handleImage, setHandleImage] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const { users, setUsers } = useFacebookContext(); // Assuming setUsers is available

  const currentUser = JSON.parse(localStorage.getItem("WhichUser"));

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);

  function handlePost() {
    // Create a new post object
    const newPost = {
      id: Date.now(),
      name: currentUser.name, // Dynamic name
      image: imagePreview || dp, // Use profile image or default image
      content: description,
      time: "Just now", // You can dynamically calculate time later
      likes: { count: 0, liked: false }, // Initialize likes
    };

    setImagePreview(null);
    setDescription("");
    setHandleImage(false);

    // Update the user's posts array and store it in state
    setUsers((prevUsers) => {
      // Ensure currentUser is available
      if (!currentUser || !currentUser.username) {
        console.error("Current user is not valid.");
        return prevUsers; // Exit early if currentUser is invalid
      }

      // Map through users to update the user's posts
      const updatedUsers = prevUsers.map((user) => {
        if (user.username === currentUser.username) {
          // Ensure that user.post exists or initialize it as an empty array
          return {
            ...user,
            post: [...(user.post || []), newPost], // Spread existing posts and add new post
          };
        }
        return user;
      });

      // Log for debugging
      console.log("Updated Users:", updatedUsers);

      // Update localStorage with the new users data
      localStorage.setItem("AvailableUsers", JSON.stringify(updatedUsers));

      return updatedUsers; // Return the updated users array
    });

    setIsClicked(false); // Close the post modal after posting
  }

  return (
    <div className={`relative ${isClicked ? "overflow-hidden" : ""}`}>
      <div
        className={`flex flex-col bg-white relative rounded-lg p-5 md:p-8 w-full md:max-w-2xl lg:max-w-4xl sm:mx-auto mt-5 ${
          isClicked ? "blur-sm" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <img
            src={dp}
            alt="My profile dp"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
          <input
            type="text"
            className="bg-[#f2f2f2] w-full p-2 md:p-3 rounded-full text-lg outline-none"
            placeholder={`What's on your mind, ${currentUser?.name || "User"}?`}
            onClick={() => setIsClicked(true)}
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

      {isClicked && (
        <div className="fixed inset-0 bg-opacity-50 z-30">
          <div className="fixed inset-0 flex justify-center items-center z-40">
            <div className="bg-white w-[500px] rounded-lg p-5 md:p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <h1 className="text-center font-bold text-xl">Create Post</h1>
                <div
                  onClick={() => setIsClicked(false)}
                  className="bg-[#d6d9dd] w-[30px] h-[30px] flex justify-center hover:bg-[#d6d9dd] rounded-full items-center"
                >
                  <i className="fa-solid fa-x text-[#5b626a] hover:cursor-pointer"></i>
                </div>
              </div>
              <hr className="border-1 border-top-1 border-[#e2e5e9] mt-3 mb-3" />
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={currentUser?.profileImage || dp}
                  alt="My profile dp"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <h1 className="text-lg font-medium">
                  {currentUser?.name || "Muhammad Hasim"}
                </h1>
              </div>
              <textarea
                rows={5}
                type="text"
                className="bg-[#f2f2f2] w-full p-2 md:p-3 rounded-lg text-lg outline-none"
                placeholder="What's on your mind?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div>
                <div
                  className={
                    handleImage
                      ? "flex w-full bg-[#f2f2f2] p-4 justify-between items-center rounded-lg"
                      : "hidden"
                  }
                >
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="bg-[#f2f2f2] rounded-lg"
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mt-2 max-h-20"
                    />
                  )}
                  <i
                    className="fa-solid fa-x text-[#5b626a] hover:cursor-pointer mt-2"
                    onClick={() => {
                      setHandleImage(false);
                      setImage(null);
                    }}
                  ></i>
                </div>

                <div className="w-full flex border-1 border-[#d0d3d7] rounded-lg justify-between items-center p-2 mt-3">
                  <h1>Add to your post</h1>
                  <label
                    onClick={() => setHandleImage(true)}
                    htmlFor="file"
                    className="bg-[#f2f2f2] text-[#606366] font-medium text-lg rounded-full p-2 mt-3 flex justify-center items-center cursor-pointer"
                  >
                    <i className="fa-regular fa-image text-[#41b35d]"></i>
                  </label>
                </div>
              </div>

              <button
                onClick={handlePost}
                className="bg-[#0861f2] text-white font-medium text-lg rounded-full p-2 w-full mt-3"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCreatePost;
