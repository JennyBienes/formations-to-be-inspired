import Filters from "../components/Filters";

import "../stylesheets/main.css";

const Main = (props) => {
  //console.log("Dentro de Footer");

  return (
    <header className="main__layout">
        <div>
          <p>Acá van los cursos, textos y todo lo demas</p>
        <Filters />
        </div>
        
        <div>
            <button> Entrar </button>
        </div>
    </header>
  );
};

export default Main;
