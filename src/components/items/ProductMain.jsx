import Image from 'next/image'
import { Ray } from '../utilitaries/icons'
import Link from 'next/link'

import styles from './ProductMain.module.css'

function freteTipo(tipo) {
    if (tipo) {
        return <p className={styles.freteGratis}>
            <Ray /> <strong>Frente Grátis!</strong>
        </p>
    } else {
        return <p className={styles.fretePago}>
            Frete a partir de R$ 12,50
        </p>
    }
}


export default function ProductMain(props) {
    const precoRefeito = props.preco.toString().replace('.', ',');

    function parcela(preco) {

        /* Pega o preco e o converte em parcelas */
        const parc = preco / 10;
        const int = parc.toString().split('.')[0];
        const frac = parc.toString().split('.')[1].slice(0, 2);

        return [int,frac];
    }

    const precoParcela = parcela(props.preco);

    /* O link abaixo envia, pela barra de endereço, os dados do produto clicado e, com base nesses dados, renderiza a página.*/
    return <Link href={`${window.location}/produtos?nome=${props.nome}&thumb=${props.thumb}&preco=${precoRefeito}&parc=${precoParcela[0]},${precoParcela[1]}${props.frete ? `&frete=${props.frete}` : ''}&estrelas=${props.estrelas}&desc=${props.desc}`} passHref>
        <div className={styles.content} title={props.nome}>
            {/* A mensagem de bem avaliado só é exibida se for avaliação máxima*/}
            {props.estrelas === 5 ? <div className={styles.avaliado}>★ BEM AVALIADO</div> : ''}

            {/* <img src={`/design/imgs-produtos/${props.thumb}.jpg`} alt="Imagem do produto " /> */}
            <Image src={`/design/imgs-produtos/${props.thumb}.jpg`} alt="Imagem do produto " width={200} height={140} />
            <h3>{props.nome}</h3>
            <h4>R$ {precoRefeito}</h4>
            <p>Em 10x de {precoParcela[0]} <sup style={{ marginLeft: '5px' }}>{precoParcela[1]}</sup></p>

            <hr />

            {freteTipo(props.frete)}
        </div>
    </Link>
}



/* Pôr o esquema de '5 estrelas' */