import InputHeader from "../items/InputHeader";
import LogoUE from "../items/LogoUE";
import styles from './Header.module.css'

export default function Header(){
    return (
        <header className={styles.header}>
            <LogoUE />
            <InputHeader />
            <div className={styles.userArea}>
                <a href="#">Olá, Usuário</a>
            </div>
        </header>
    )
}