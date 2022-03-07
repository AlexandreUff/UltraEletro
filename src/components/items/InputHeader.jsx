import { Search } from '../utilitaries/icons'
import styles from './InputHeader.module.css'

export default function InputHeader(){
    return (
        <div className={styles.content} title="Digite aqui para pesquisar">
            <input type="text" placeholder="Digite aqui o produto que deseja."/>
            <button title='Procurar'><Search/></button>
        </div>
    )
}