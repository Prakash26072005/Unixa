import styles from "./RightPanel.module.css";
import {
  trendingProject,
  suggestedUsers,
} from "../../data/suggestions";

const RightPanel = () => {
  return (
    <div className={styles.panel}>

      {/* Trending */}
      <div className={styles.card}>
        <h3>Trending Topics</h3>

        <div className={styles.projectBox}>
          <h4>{trendingProject.project.name}</h4>

          <div className={styles.tags}>
            {trendingProject.project.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>

          <p>{trendingProject.project.description}</p>

          <div className={styles.projectFooter}>
            <button className={styles.moreBtn}>More</button>
            <button className={styles.applyBtn}>Apply</button>
          </div>
        </div>
      </div>

      {/* Suggested Connections */}
      <div className={styles.card}>
        <h3>Suggested Connections</h3>

        {suggestedUsers.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <img src={user.avatar} alt={user.name} />

            <div className={styles.userInfo}>
              <h4>{user.name}</h4>
              <p>{user.role}</p>
              {user.mutual && (
                <span>{user.mutual}+ mutual connections</span>
              )}
              {user.bestMatch && (
                <span className={styles.match}>
                  Best Match {user.bestMatch}%
                </span>
              )}
            </div>

            <button className={styles.connectBtn}>
              {user.bestMatch ? "Request Referral" : "Connect"}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RightPanel;