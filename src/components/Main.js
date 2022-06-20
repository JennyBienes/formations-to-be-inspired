import Filters from "../components/Filters";

import "../stylesheets/main.css";
import FormationsList from "./FormationsList";

const Main = (props) => {
  //console.log("Dentro de Footer");

  return (
    <header className="main__layout">
        <div>
          <p>Acá van los cursos, textos y todo lo demas</p>
        <Filters />
        </div>
        
        <div>
            <button> Ir a la búsqueda </button>
        </div>
        <FormationsList />
    </header>
  );
};

export default Main;
