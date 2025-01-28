import "./profile.css";

import ProfileCreatePost from "../../components/ProfileCreatePost";
import ProfilePosts from "../../components/others/ProfilePosts";
import ProfileTop from "../../components/ProfileTop";
import { useState } from "react";

function Profile() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="flex flex-col  w-full h-full ">
      <ProfileTop isClicked={isClicked} />

      <ProfileCreatePost isClicked={isClicked} setIsClicked={setIsClicked} />
      <ProfilePosts isClicked={isClicked} />
    </div>
  );
}

export default Profile;
