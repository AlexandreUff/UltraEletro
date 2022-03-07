import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Main from '../components/layouts/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ultra Eletro - O segundo maior site de produtos eletrônicos do Brasil.</title>
        <meta name="description" content="Compra ou venda produtos eletrônicos de todas as categorias no segundo maior site de produtos tecnológicos do Brasil." />
        <link rel="icon" href="/favicon.png" />
        {/* Add Keywords, UTF-8, pt-br */}
      </Head>

      <Header />

      <Main />

      <Footer/>

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
- A página inicial apresenta os 'cards' dos produtos a partir de uma chamada back-end e os renderiza com bases nas informações passadas;
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