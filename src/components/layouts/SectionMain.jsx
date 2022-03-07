
import { useEffect, useState } from 'react'
import ProductMain from '../items/ProductMain'
import { ArrowCircle, Star } from '../utilitaries/icons'
import styles from './SectionMain.module.css'
import AsideMainFilter from '../items/AsideMainFilter'

export default function SectionMain(){

    function RenderizaProdutos(){ /* Aqui é feita uma chamada Back-End para pegar as informações dos produtos*/

        const [produtos,setProdutos] = useState([]);
        let renderizaProds = [];

        useEffect(()=>{
                fetch('./api/produtos')
                .then(resp => resp.json())
                .then(setProdutos)
        },[]);

        renderizaProds = produtos.map((prd, i) => {
            return <ProductMain key={i} nome={prd?.nome} thumb={prd?.thumb} preco={prd?.preco} frete={prd?.frete} estrelas={prd?.estrelas} desc={prd?.desc}/>
        })

        return renderizaProds;
    }

    /* Aqui é renderizada o aside e a área de exibição dos produtos */
    return (
        <section className={styles.content}>
            {/* Lateral */}
            <div className={styles.floatOptions}>
                <div className={styles.contornoInterno}>
                    <ArrowCircle/>
                </div>
            </div>
            <aside>
                <p><Star/> <strong>Geral</strong></p>
                <ul>
                        <AsideMainFilter titulo="Acesórios" link="#"/>
                        <AsideMainFilter titulo="Componentes" link="#"/>
                        <AsideMainFilter titulo="Notebooks" link="#"/>
                        <AsideMainFilter titulo="Desktops" link="#"/>
                        <AsideMainFilter titulo="Ferramentas" link="#"/>
                        <AsideMainFilter titulo="Monitores" link="#"/>
                        <AsideMainFilter titulo="Celulares" link="#"/>
                        <AsideMainFilter titulo="Impressoras" link="#"/>
                        <AsideMainFilter titulo="Outros" link="#"/>
                </ul>

                <p><Star/> <strong>Preço</strong></p>
                <ul>
                        <AsideMainFilter titulo="Até R$100" link="#"/>
                        <AsideMainFilter titulo="R$100 a R$500" link="#"/>
                        <AsideMainFilter titulo="R$500 a R$1000" link="#"/>
                        <AsideMainFilter titulo="R$1000 a R$5000" link="#"/>
                        <AsideMainFilter titulo="Acima de R$5000" link="#"/>
                </ul>

                <p><Star/> <strong>Lançamento</strong></p>
                <ul>
                        <AsideMainFilter titulo="Até 1 mês" link="#"/>
                        <AsideMainFilter titulo="Até 6 meses" link="#"/>
                        <AsideMainFilter titulo="Até 1 ano" link="#"/>
                        <AsideMainFilter titulo="Até 2 anos" link="#"/>
                        <AsideMainFilter titulo="Até 5 anos" link="#"/>
                </ul>

            </aside>

            {/* Área de produtos */}
            <div className={styles.prodArea}>

                {/* Esta função jogará os produtos aqui */}
                {RenderizaProdutos()}
            </div>
        </section>
    )
}