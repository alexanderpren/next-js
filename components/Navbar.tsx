import styles from "./Navbar.module.css"
import { ActiveLink } from "./ActiveLink"
import { MenuItems } from "./menuItems"

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {MenuItems.map(({ text, url }) => {
        return <ActiveLink key={url} text={text} url={url} />
      })}
    </nav>
  )
}
