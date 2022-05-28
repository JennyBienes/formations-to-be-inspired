import "../stylesheets/header.css";
import Spain from '../images/Spanish.png'
import Portugal from '../images/Portuguese.png'

const Header = (props) => {
  //console.log("Dentro de Footer");

  return (
    <header className="header__layout">
        <p className="header__title"> Formations to be Inspired </p>
        <div className="input__user"> 
            <input
                    className="input__user"
                    type="text"
                    placeholder="Usuario"
                    id="userName"
                    value={props.filterName}
                    onChange={props.handleFilterName}
                />
            <input
                    className="input__user"
                    type="text"
                    placeholder="Contraseña"
                    id="userPassword"
                    value={props.filterName}
                    onChange={props.handleFilterName}
                />
       </div>
        <div>
          <p className="header__text">Seleccionar Idioma </p>
          <img className="header__langImgSpain" src={Spain} alt="icon" />
          <img className="header__langImgPt" src={Portugal} alt="icon" />
        </div>
    </header>
  );
};

export default Header;
