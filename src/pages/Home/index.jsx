import { useState, useEffect } from 'react'

import CardCandidatos from '../../components/CardsCandidato';
import Footer from '../../components/Footer';

import './style.scss'


function App() {
  const [dadosApi, setDadosApi] = useState([])

  const host = "https://app-votacao-wes.herokuapp.com/"

  useEffect(() => {
    
      
    
    fetch(host)
    .then(response => response.json())
    .then( data => setDadosApi(data))
    .catch(err => console.log("Houve um erro", err))
    
    

  
  }, []);

 
 
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
          porcetagem= "50"
          >
          
        </CardCandidatos>)}
      
      </div>
      <Footer/>
    </div>
  )
}

export default App
