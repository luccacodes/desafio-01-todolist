import styles from "./Header.module.css";
import todoLogo from "../assets/todoLogo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />
    </header>
  )
}