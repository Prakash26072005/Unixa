import styles from "./ProfileDropdown.module.css";
import { profileData } from "../../data/profile";

const ProfileDropdown = () => {
  const { profile } = profileData;

  return (
    <div className={styles.dropdown}>
      <div className={styles.profileTop}>
        <img
          src={profile.avatar}
          alt=""
          className={styles.avatar}
        />
        <div>
          <h4>{profile.name}</h4>
          <p>{profile.role}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.outlineBtn}>
          View profile
        </button>
        <button className={styles.primaryBtn}>
          Verify now
        </button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <h5>Account</h5>
        <span className={styles.premium}>
          🟨 Try 1 month of Premium for ₹0
        </span>
        <span>Settings & Privacy</span>
        <span>Help</span>
        <span>Language</span>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <h5>Manage</h5>
        <span>Posts & Activity</span>
        <span>Job Posting Account</span>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.signOut}>
        Sign out
      </div>
    </div>
  );
};

export default ProfileDropdown;