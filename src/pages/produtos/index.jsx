import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Footer from '../../components/layouts/Footer'
import Header from '../../components/layouts/Header'
import { Carrinho, IcoChat, IcoCheck, IcoClock, IcoFrete, IcoTrop, Ray, Star } from '../../components/utilitaries/icons'
import styles from './ShowProds.module.css'

export default function ShowProds() {

  const [qtdProd,setQtdProd] = useState(1);

  /* A função bloqueia caso o usuário tente selecionar uma quantidade de produtos desejados menor que 1. */
  function selecionaQuantidade(v){
    if(v < 1){
      setQtdProd(1);
    } else {
      setQtdProd(v);
    }
  }

  function freteTipo(tipo){
    if(tipo){
        return <span style={{display:'flex',alignItems: 'center'}} ><Ray/> <strong>Frente Grátis!</strong></span>
    } else {
        return 'Frete a partir de R$ 12,50'
            
    }
  }

  function insereEstrelas(num){
    const numAval = num;
    let Aval = [];

    let i = 1;
    for (; i <= 5; i++) {

      if(i <= numAval){
        Aval.push(<span  key={i} className={`${styles.avaliacao} ${styles.marcado}`}><Star/></span>)
      } else {
        Aval.push(<span key={i} className={styles.avaliacao}><Star/></span>)
      }
    }
    return Aval;
  }

  /* Os parâmetros são capturados via GET */
  const router = useRouter();
  const nome = router.query.nome
  const thumb = router.query.thumb
  const preco = router.query.preco
  const parc = router.query.parc
  const frete = router.query.frete
  const estrelas = router.query.estrelas
  const desc = router.query.desc

  return (
    <div>
      <Head>
        <title>{nome} | Ultra Eletro</title>
        <meta name="description" content="Compra ou venda produtos eletrônicos de todas as categorias no segundo maior site de produtos tecnológicos do Brasil." />
        <link rel="icon" href="/favicon.png" />
        {/* Add Keywords, UTF-8, pt-br */}
      </Head>

      <Header />

      <main className={styles.content}>
        {/* Informações do produto */}
        <section className={styles.prodInfos}>
          {/* <img src={`/design/imgs-produtos/${thumb}.jpg`} alt={`Imagem do produto ${nome}`} title={nome} /> */}
          <Image src={`/design/imgs-produtos/${thumb}.jpg`} alt={`Imagem do produto ${nome}`} title={nome} width={500} height={340} />
          
          <div className={styles.prodDesc}>
            <h3>{nome}</h3>
            <h5>{desc}</h5>

            <div /* className={styles.avaliacao} */>
              {/* <Star/><Star/><Star/><Star/><Star/> */}
              {insereEstrelas(estrelas)}
            </div>

            <h5>Carga de: 20v</h5>
            <h5>Frequência: 133Mh</h5>
            <h5>Cor: Transparente</h5>

            <h4><strong>R$ {preco}</strong></h4>
            <p>Ou em 10x de R$ {parc}</p>

            <small>
              <a href="#" className={styles.payModes}>Veja os modos de pagamento</a>
            </small>

            <p className={styles.freteArea}><IcoFrete/> {freteTipo(frete)}</p>

            <a href="#">
              <button className={styles.comprar} title="Comprar"><IcoCheck/> Comprar</button>
            </a>
            
            <a href="#">
              <button className={styles.addCar} title="Adicionar ao Carrinho"><Carrinho/> Adicionar ao Carrinho</button>
            </a>

            <div className={styles.qtdProd}>
              Quantidade:
              <input type="number" name="quantidade" id="qtdProd" value={qtdProd} onChange={e => selecionaQuantidade(e.target.value)}/>
            </div>

            <div className={styles.statusVendedor}>
              Informações sobre o vendedor

              <div>

                <div className={styles.icoVendedor}>
                  <IcoTrop/>
                  <small>Líder de Vendas</small>
                </div>

                <div className={styles.icoVendedor}>
                  <IcoClock/>
                  <small>Entrega no Prazo</small>
                </div>

                <div className={styles.icoVendedor}>
                  <IcoChat/>
                  <small>Bom atendimento</small>
                </div>

              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}