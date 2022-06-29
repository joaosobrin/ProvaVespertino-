import { useState } from "react";
import Button from "./Button";
import "./Perfil.css"

function Perfil({nome, foto, idade}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0);


    function aumentarVisualizacoes(){
        setNumeroVisualizacoes(numeroVisualizacoes+1)

    }

    return(
        <div className="card">
            <img className="cardImg" src={foto} alt={nome} width="150px" height="200px" />
            <p className="cardTitle">Nome: {nome}</p>
            <p className="cardSubtitle">Idade: {idade}</p>
            
        </div>
    );
}
export default Perfil;