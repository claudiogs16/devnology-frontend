import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Devnology</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Sobre Nós</h2>
            <ul>
              <li>Carreiras</li>
              <li>Nossas lojas</li>
              <li>Nossos Cuidados</li>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Servico Atendimento</h2>
            <ul>
              <li>Centro de ajuda </li>
              <li>Como comprar </li>
              <li>Acompanhe seu pedido </li>
              <li>Compras corporativas e em massa </li>
              <li>Devoluções </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contate-nos</h2>
            <ul>
              <li>Rua das Flores, 123
                  Bairro Jardim Primavera
                  Cidade São Paulo
                  Estado São Paulo
                  CEP 01234-567
              </li>
              <li>Email: suport@devnology.com.br</li>
              <li>Telefone: +55 (11) 99999-9999</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
