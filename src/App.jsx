import "./App.css"
import "./Plano.jsx"
import Plano from "./Plano.jsx";

function App() {
    const palnos = [
        {
            title: "Start",
            price: "Free",
            qnt_users: "1 user",
            qnt_projects: "1 project",
        },
        {
            title: "Basic",
            price: "$19.99",
            qnt_users: "5 Users",
            qnt_projects: "20 Projects",
        },
        {
            title: "Expert",
            price: "$129.99",
            qnt_users: "Unlimited Users",
            qnt_projects: "Unlimited Projects",
        },
    ];

    return (
        <div className="pai">
                <Plano />
                <Plano />
                <Plano />  
        </div>

    );
}

export default App