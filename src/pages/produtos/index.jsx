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

console.log(`

Olá!

*Tecnologias usadas:
- HTML;
- CSS;
- Javascript;
- ReactJS;
- NextJs.

*Objetivo da página:
- Simulação de uma página de e-commerce responsiva com a possibilidade escolher um produto e ir à página de compra e apresentação de mais informações.

*Funcionalidades objetivas e técnicas:
- A página inicial apresenta os 'cards' dos produtos a partir de uma chamada back-end consumindo uma API e os renderiza com bases nas informações passadas;
- O layout da página e alguns dos elementos "menores" são construídos a partir de componentes;
- Os produtos que têm 5 estrelas (valor máximo), aparecem em seu card a informação "bem avaliado";
- Os produtos com frente grátis têm essa informação já apresentada na parte inferior do 'card';
- Ao clicar no card do produto, as informações da props do componente são enviadas pela query por meio do { useRouter } e renderizadas na página de compra;
- Não existem várias páginas de compra para cada produto, mas sim uma única página que renderiza as informações do produto que são passadas da props para query;
- O input 'quantidade' na página de compra faz uso do { useState } para alterar seu valor;
- O valor do input 'quantidade' bloqueia a tentativa de pôr seu valor menor que 1.

*Considerações importantes:
- Apesar de existir a possibilidade de se fazer uma 'requisição' ao back-end para renderizar os produtos na página de compra (o que seria mais prático do que enviar pela barra de endereços), o método que foi usado serviu apenas para explorar o recurso do useRouter.

`)