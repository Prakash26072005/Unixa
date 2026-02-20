import styles from "./Dropdown.module.css";

const connections = [
  { id: "u1", username: "rahul_dev" },
  { id: "u2", username: "neha_ui" }
];

const ShareModal = () => {
  return (
    <div className={styles.dropdown}>
      {connections.map((u) => (
        <p key={u.id}>{u.username}</p>
      ))}
    </div>
  );
};

export default ShareModal;
