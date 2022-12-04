import './style.scss'

export default function CardCandidatos(props){

    const host = "http://localhost:3000/"
   
    function vote(doc, name){
        const body = {
                "id":doc, 
                "candidato": name
            }

        fetch(`${host}votar`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
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
            <div className='barra-progresso-in' style={{width: `${props.porcetagem}%`}}>
                <span className='texto-barra'>{props.porcetagem}%</span>
            </div>
        </div>
        <button className='votar' onClick={()=>{ vote(props.docs, props.nome)}}>Votar</button>
        </div>
    </div>
    )
}