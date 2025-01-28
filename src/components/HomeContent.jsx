import HomeCreatePost from "./others/HomeCreatePost";
import HomeStories from "./others/HomeStories";
import Posts from "./others/Posts";

function HomeContent() {
  return (
    <div className="w-full h-full">
      <HomeCreatePost />

      <HomeStories />

      <Posts />
    </div>
  );
}

export default HomeContent;
