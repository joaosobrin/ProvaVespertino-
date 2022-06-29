import HelloWorld from "./HelloWorld"
// import Button from "./Button";
import SayName from "./SayName";
import Perfil from "./Perfil";

function App() {

  const lista_pessoas =[
    {
      nome: "Karen",
      idade: 17,
      foto: "https://picsum.photos/200"
    },
    {
      nome: "Igor",
      idade: 17,
      foto: "https://picsum.photos/200"

    },
    {
      nome: "meu casal 3ceirao",
      idade: "18+",
      foto: "https://picsum.photos/200"
    }
  ]

  return (
    <div className="App">
      <HelloWorld />
      {/* <Button cor="#00ff00" frase="confimar"/>
      <Button cor="#ff0000" frase="recusar"/> */}
      <SayName nome="João"/>
      {/* <Perfil foto="https://picsum.photos/200" nome="João" idade={18}/> */}

      { lista_pessoas.map( (pessoa) => {
        return <Perfil foto={pessoa.foto} 
                      nome={pessoa.nome} 
                      idade={pessoa.idade}/>
      } ) }

    </div>
  );   
}

export default App
