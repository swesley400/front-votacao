import './style.scss'

export default function CardCandidatos(props){

    const host = "https://app-votacao-wes.herokuapp.com/"
   

    function vote(doc, name){
        const body = {
                "id":doc, 
                "candidato": name
            }
        console.log(body)
        

        fetch(`${host}votar`, {
            
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(body),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
    }


    return(
    <div className='cardCandidatos'>
        <div>
        <div className='img-candidato'>
            <img src={props.urlImg} alt="imgCandidato" />
        </div>
        <div>{props.nome}</div>
        <div className='partido-numero'>
            <div>{props.partido}</div>
            <div>{props.nume}</div>
        </div>
        <div className='votos'>{props.quandidade_de_votos}</div>
        <div className='barra-progresso-out'>
            <div className='barra-progresso-in'>
                <span className='texto-barra'>100%</span>
            </div>
        </div>
        <button className='votar' onClick={()=>{ vote(props.docs, props.nome)}}>Votar</button>
        </div>
    </div>
    )
}