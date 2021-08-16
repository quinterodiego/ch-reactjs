import NavBar from "./NavBar";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from "./ItemDetailContainer";

const titulo = "Lista de Items";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer titulo = { titulo }/>
            <ItemDetailContainer />
        </>
    );
}

export default App;