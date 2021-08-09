import NavBar from "./NavBar";
import ItemListContainer from './ItemListContainer';

const titulo = "Lista de Items";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer titulo = { titulo }/>
        </>
    );
}

export default App;