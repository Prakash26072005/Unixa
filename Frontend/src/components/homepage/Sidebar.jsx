import styles from "./Sidebar.module.css";
import { profileData } from "../../data/profile.js";

const Sidebar = ({ onClose }) => {
  const { profile, skills, projects } = profileData;

  return (
    <div className={styles.sidebar}>
    
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${profile.coverImage})` }}
      ></div>

   
      <div className={styles.profileSection}>
        <img
          src={profile.avatar}
          alt="avatar"
          className={styles.avatar}
        />
        <h4>{profile.name}</h4>

        <div className={styles.stats}>
          <div>
            <strong>{profile.followers}</strong>
            <span>Followers</span>
          </div>
          <div>
            <strong>{profile.connections}</strong>
            <span>Connections</span>
          </div>
          <div>
            <strong>{projects.length}</strong>
            <span>Projects</span>
          </div>
        </div>
      </div>

      
      <div className={styles.skillsSection}>
        <h5>Skills</h5>
        <div className={styles.skills}>
          {skills.slice(0, 5).map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>

     
      <div className={styles.portfolioSection}>
        <h5>Your Portfolio</h5>

        {projects.slice(0, 2).map((project) => (
          <img
            key={project.id}
            src={project.thumbnail}
            alt={project.name}
            className={styles.portfolioImg}
          />
        ))}

        <button className={styles.addBtn}>+ Add Portfolio</button>
      </div>

    </div>
  );
};

export default Sidebar;