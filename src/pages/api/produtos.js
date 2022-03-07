// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function ListaProdutos(req, res) {
  res.status(200).json([
                {nome:"MX-Gold Premium V9.5", thumb:"pexels-kinkate-205926", preco:199.99, frete:false, estrelas:5, desc:"Fone de ouvido com arco em adamantium e bordas douradas."},
                {nome:"Router Turbo TecBuild 77", thumb:"pexels-aditya-singh-4218546", preco:149.99, frete:true, estrelas:3, desc:"Roteador de internet LAN-WAN da Tabajara's Technology."},
                {nome:"Joystick PS5 Wireless", thumb:"pexels-cottonbro-3945659", preco:399.99, frete:false, estrelas:2, desc:"Controle para Sony Play Station 5 sem fio."},
                {nome:"iPhone Beta 5", thumb:"pexels-jess-bailey-designs-788946", preco:2899.99, frete:true, estrelas:4, desc:"iPhone 5 Beta versão ostentação arcaica."},
                {nome:"iPad Generic X", thumb:"pexels-josh-sorenson-1334598", preco:3199.99, frete:false, estrelas:5, desc:"iPad genérico sem nada de mais que ninguém compra."},
                {nome:"Notebook Low Hardware 3", thumb:"pexels-karsten-madsen-18105", preco:539.99, frete:true, estrelas:1, desc:"Notebook com processador Pentium 4 e 512MB de RAM."},
                {nome:"Groove Master LP11", thumb:"pexels-lilartsy-4717873", preco:1999.99, frete:false, estrelas:1, desc:"Microfone studio model prateado Yamaha."},
                {nome:"Keyboard SoftHand Pro", thumb:"pexels-olenka-sergienko-1772123", preco:99.99, frete:true, estrelas:3, desc:"Teclado TecUruguay simple model."},
                {nome:"Lazy Boy Headphone 4C", thumb:"pexels-sound-on-3394650", preco:299.99, frete:false, estrelas:3, desc:"Fone de ouvido da Lazy Boy 4 canais."},
                {nome:"TecSound Player 2020", thumb:"pexels-sound-on-3394666", preco:129.99, frete:true, estrelas:5, desc:"Fone de ouvido da TecSound que é cópia do Lazy Boy."},
                {nome:"Old School Recorder 1980", thumb:"pexels-stas-knop-1228497", preco:9.99, frete:false, estrelas:2, desc:"Fita cassete Mega Recorder versão 1980."},
                {nome:"Notebook BadTools 2005", thumb:"pexels-tuur-tisseghem-812264", preco:739.99, frete:true, estrelas:4, desc:"Notebook com processador Pentium 3 e 256MB de RAM."}
  ])
}
