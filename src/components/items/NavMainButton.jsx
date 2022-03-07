import { Sandwich } from '../utilitaries/icons'
import styles from './NavMainButton.module.css'

function buttonType(tipo){
    if(tipo !== 'sandwich'){
        return <li className={styles.listButton}>
                <button title={tipo} >{tipo}</button>
            </li>
    } else {
        return <li className={styles.listSand}>
                    <button title="Menu" ><Sandwich/></button>
                </li>
    }
}

export default function NavMainButton(props){
    return buttonType(props.titulo)
}