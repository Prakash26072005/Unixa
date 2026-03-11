import Banner from "../components/homepage/banner";
import Sidebar from "../components/homepage/Sidebar";
import RightPanel from "../components/homepage/RightPanel";
import PostCard from "../components/homepage/PostCard";
import { posts } from "../data/posts";

const Home = () => {
  return (

<div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[260px_1fr_320px] gap-6 px-4 md:px-10 py-5 bg-[#f3f2ef]">

  {/* LEFT SIDEBAR */}
  <div className="hidden lg:block lg:row-span-2 sticky top-[80px] h-[calc(100vh-80px)]">
    <Sidebar />
  </div>

  {/* BANNER */}
  <div className="md:col-span-2 lg:col-span-2">
    <Banner />
  </div>

  {/* FEED */}
  <div className="lg:col-start-2">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
     {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
     {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>

  {/* RIGHT PANEL */}
  <div className="hidden md:block lg:col-start-3 sticky top-[80px]">
    <RightPanel />
  </div>

</div>

  );
};

export default Home;