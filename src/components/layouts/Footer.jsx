import { IcoFB, IcoIG, IcoTT, IcoYT } from '../utilitaries/icons'
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.content}>
            <nav>
                <ul>
                    <li>
                        <a title='Facebook' href='https://pt-br.facebook.com/'><IcoFB/></a>
                    </li>
                    <li>
                        <a title='Instagram' href='https://www.instagram.com/'><IcoIG/></a>
                    </li>
                    <li>
                        <a title='Twitter' href='https://twitter.com/'><IcoTT/></a>
                    </li>
                    <li>
                        <a title='YouTube' href='https://www.youtube.com/'><IcoYT/></a>
                    </li>
                </ul>
            </nav>
            <div className={styles.creditosImagens} title='Créditos pelas imagens: Kinkate; lilartsy; karsten madsen; Olenka; Aditya; Stas; Tuur; Josh Sorenson; cottonbro.'>
                <small>
                    Créditos das imagens pelo Pexels: <br />
                    (Passe o mouse aqui para ver os nomes)
                </small>
            </div>
            <div>
                <small>&copy;2022 - Alexandre Magno Dias</small>
            </div>
        </footer>
    )
}