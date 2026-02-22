import styles from "./Home.module.css";
import Banner from "../components/homepage/banner";
import Sidebar from "../components/homepage/sidebar";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Sidebar />
      </div>

      <div className={styles.center}>
        <Banner />
       
        {/* Feed will come here */}
      </div>

      
    </div>
  );
};

export default Home;