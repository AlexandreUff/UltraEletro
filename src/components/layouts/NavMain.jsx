import NavMainButton from '../items/NavMainButton'
import styles from './NavMain.module.css'

export default function NavMain(){
    return (
        <nav className={styles.content}>
            <ul>
                <NavMainButton titulo="Categorias"/>
                <NavMainButton titulo="Ofertas do Dia"/>
                <NavMainButton titulo="Venda conosco"/>
                <NavMainButton titulo="Contato"/>
                <NavMainButton titulo="Outros"/>
                <NavMainButton titulo="sandwich"/>
            </ul>
        </nav>
    )
}