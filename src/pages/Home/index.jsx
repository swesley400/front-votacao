import { useState, useEffect } from 'react'

import CardCandidatos from '../../components/CardsCandidato';
import Footer from '../../components/Footer';

import './style.scss'



function App() {
  const [dadosApi, setDadosApi] = useState([])
  const [votosGerais, setVotosGerais] = useState([])
  const host = "http://localhost:3000/"


  function calculaPorcetagem(quantidadeDeVotosPorCanditado, votosGerais){
    let porcetagem = Number(quantidadeDeVotosPorCanditado)*100/ votosGerais
    return porcetagem
  }

 
  useEffect(() => {
    fetch(`${host}votosgerais`)
    .then(response => response.json())
    .then( data => setVotosGerais(data.votosGerais))
    .catch(err => console.log("Houve um erro", err))
    
  }, [votosGerais]);



  useEffect(() => {
    fetch(host)
    .then(response => response.json())
    .then( data => setDadosApi(data))
    .catch(err => console.log("Houve um erro", err))
    
  }, [dadosApi, votosGerais]);
  
  return (
    <div className="App">
      <h1>Versus</h1>
      <div className='container-Candidatos'>
        {dadosApi.map((item) =>  <CardCandidatos 
          key={item.doc}
          urlImg={item.urlImg}
          nome={item.nome} 
          partido={item.partido} 
          nume={item.numero} 
          quandidade_de_votos={item.quantidade_de_votos}
          docs={item.doc}
          porcetagem={ Math.round(calculaPorcetagem(item.quantidade_de_votos, votosGerais))}
          >
          
        </CardCandidatos>)}
      
      </div>
      <Footer/>
    </div>
  )
}

export default App
