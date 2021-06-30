import styles from "./style.module.css";

export default function ToDoRowNav({ children }) {
  return <nav className={styles.navList}>{children}</nav>;
}
