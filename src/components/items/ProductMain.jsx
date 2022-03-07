import Image from 'next/image'
import { Ray } from '../utilitaries/icons'
import Link from 'next/link'

import styles from './ProductMain.module.css'

function freteTipo(tipo){
    if(tipo){
        return <p className={styles.freteGratis}>
                    <Ray/> <strong>Frente Grátis!</strong>
            </p>
    } else {
        return <p className={styles.fretePago}>
                    Frete a partir de R$ 12,50
            </p>
    }
}

let precoParcela;

function parcela(preco){

    /* Pega o preco e o converte em parcelas */
    const parc = preco / 10;
    const int = parc.toString().split('.')[0];
    const frac = parc.toString().split('.')[1].slice(0,2);

    precoParcela = `${int},${frac}`;
    console.log(precoParcela);
    
    return <>{int} <sup style={{marginLeft:'5px'}}>{frac}</sup></>
}

export default function ProductMain(props){
    const precoRefeito = props.preco.toString().replace('.', ',');
    /* const precoParcela */

    /* O link abaixo envia, pela barra de endereço, os dados do produto clicado e, com base nesses dados, renderiza a página.*/
    return <Link href={`http://localhost:3000/produtos?nome=${props.nome}&thumb=${props.thumb}&preco=${precoRefeito}&parc=${precoParcela}${props.frete ? `&frete=${props.frete}` : ''}&estrelas=${props.estrelas}&desc=${props.desc}`} passHref> 
        <div className={styles.content} title={props.nome}>
                {/* A mensagem de bem avaliado só é exibida se for avaliação máxima*/}
                {props.estrelas === 5 ? <div className={styles.avaliado}>★ BEM AVALIADO</div> : ''}

            {/* <img src={`/design/imgs-produtos/${props.thumb}.jpg`} alt="Imagem do produto " /> */}
            <Image src={`/design/imgs-produtos/${props.thumb}.jpg`} alt="Imagem do produto " width={200} height={140} />
            <h3>{props.nome}</h3>
            <h4>R$ {precoRefeito}</h4>
            <p>Em 10x de {parcela(props.preco)}</p>

            <hr />

            {freteTipo(props.frete)}
        </div>
    </Link>
}



/* Pôr o esquema de '5 estrelas' */