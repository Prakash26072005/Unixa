import styles from "./Dropdown.module.css";

const LikeDropdown = ({ users }) => {
  return (
    <div className={styles.dropdown}>
      {users.map((u) => (
        <p key={u.id}>{u.username}</p>
      ))}
    </div>
  );
};

export default LikeDropdown;
