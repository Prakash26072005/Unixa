import styles from "./Home.module.css";
import Banner from "../components/homepage/banner";
import Sidebar from "../components/homepage/sidebar";
import RightPanel from "../components/homepage/RightPanel";

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
    {/* Posts here */}
  </div>

  {/* Right Panel */}
  <div className={styles.right}>
    <RightPanel/>
  </div>

</div>
  );
};

export default Home;