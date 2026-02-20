import React from 'react'
import styles from "./Home.module.css";
import Navbar from '../components/nav/Nav.jsx'
import LeftSidebar from '../components/homepage/layout/LeftSidebar.jsx';
import { posts } from "../data/posts";
import RightSidebar from "../components/homepage/layout/RightSidebar.jsx";
import PostCard from '../components/homepage/post/PostCard.jsx';

const Home = () => {
  return (
    <div>
       
           <div className={styles.container}>
        <LeftSidebar />

                <div className={styles.feed}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
1
        <RightSidebar />

        </div>
    </div>
  )
}

export default Home;