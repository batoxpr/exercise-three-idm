import Link from 'next/link'
import styles from "./WeatherCard.module.css"

const Header = () => (
    <header>
        <nav className={styles.headerBox}>
            <Link href='New York'>New York</Link>
            <Link href='Tokyo'>Tokyo</Link>
            <Link href='London'>London</Link>
            <Link href='Miami'>Miami</Link>
            <Link href='Perth'>Perth</Link>
        </nav>
    </header>
);

export default Header;