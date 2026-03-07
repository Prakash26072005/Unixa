import styles from "./Home.module.css";
import Banner from "../components/homepage/banner";
import Sidebar from "../components/homepage/Sidebar";
import RightPanel from "../components/homepage/RightPanel";
import PostCard from "../components/homepage/PostCard"
import { posts } from "../data/posts";

const Home = () => {
  return (
    <div className={styles.container}>

  <div className={styles.left}>
    <Sidebar />
  </div>

  {/* Banner spans 2 columns */}
  <div className={styles.bannerRow}>
    <Banner />
  </div>

  {/* Feed */}
  <div className={styles.center}>
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

  {/* Right Panel */}
  <div className={styles.right}>
    <RightPanel/>
  </div>

</div>
  );
};

export default Home;