import { useParams } from "react-router-dom";  

function Produto(){   

    const { id } = useParams();
    return(
        <div>
            <h1>Produto</h1>
            <p>Meu produto é {id}</p>
        </div>
    );
}
export default Produto;