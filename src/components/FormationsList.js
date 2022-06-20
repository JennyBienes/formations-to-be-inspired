import "../stylesheets/formationsList.css";
import tiles from '../images/Tejas Toledo.png'
import insulation from '../images/Aislamientotermico.png'
//import FormationCard from './FormationCard'

const FormationsList = (props) => {
    console.log("Dentro de FormationsList");
  
  //const renderFormations = props.formations.map((formation, index) => (
  
  // Paralizo la ejecución del map mientras organizo la lista inicialmente
  //const renderFormations = props.formations.map((formation, index) => (
    
    //<li className="card__class" key={4}>   
     // <FormationCard formation={formation} />
    //</li>
  //));
// esto va debajo entre los div       <ul className="list__class">{renderFormations}</ul>


  return (
    <div className="list__class">
       <div className="card__class">
              <a  target="_blank"rel="noreferrer" href="https://drive.google.com/file/d/1bYQV2yolzeLqE6ENsV3ul9SKv06pRZ1J/view?usp=sharing">
                <img className="img__class" src={tiles} alt="icon"/> 
              </a>
            <h2 className="text__card__class"> Tejas de Toledo</h2>
       </div>
       <div className="card__class">
              <a  target="_blank"rel="noreferrer" href="https://drive.google.com/file/d/1djswp7VULZcjNvmO7VykfGelN7CEjL5w/view?usp=sharing">
                <img className="img__class" src={insulation} alt="icon"/> 
              </a>
            <h2 className="text__card__class"> Aislamientos </h2>
       </div>
       <div className="card__class">
              <a  target="_blank"rel="noreferrer" href="https://drive.google.com/file/d/1djswp7VULZcjNvmO7VykfGelN7CEjL5w/view?usp=sharing">
                <img className="img__class" src={insulation} alt="icon"/> 
              </a>
            <h2 className="text__card__class"> Aislamientos </h2>
       </div>
       <div className="card__class">
              <a  target="_blank"rel="noreferrer" href="https://drive.google.com/file/d/1djswp7VULZcjNvmO7VykfGelN7CEjL5w/view?usp=sharing">
                <img className="img__class" src={insulation} alt="icon"/> 
              </a>
            <h2 className="text__card__class"> Aislamientos </h2>
       </div>
    </div>
  );
};

export default FormationsList;