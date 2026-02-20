import styles from "./LeftSidebar.module.css";
import profile from "../../../data/profile.js";

const LeftSidebar = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://i.pravatar.cc/150"
        alt="profile"
        className={styles.avatar}
      />
      <h3>{profile.profile.name}</h3>
      <p>{profile.profile.headline}</p>

      <div className={styles.stats}>
        <p>Followers: {profile.profile.followers}</p>
        <p>Connections: {profile.profile.connections}</p>
      </div>
    </div>
  );
};

export default LeftSidebar;