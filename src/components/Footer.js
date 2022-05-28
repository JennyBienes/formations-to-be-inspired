import facebook from '../images/facebook-logo.png'
import linkedin from '../images/linkedin-ico.png'
import twitter from '../images/twitter-ico.png'
import workplace from '../images/workplace-ico.png'
import "../stylesheets/footer.css";

const Footer = (props) => {
  //console.log("Dentro de Footer");

  return (
    <footer className="main-footer">
      <div className="main-container">
          <div className="main-footer__row-1">
            <h2 className=" heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a  target="_blank"rel="noreferrer" href="https://www.linkedin.com/company/bmigroup-espana/">
                <img className="main-footer__icon" src={linkedin} alt="icon"/> 
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/bmi.espana" > 
              <img className="main-footer__icon" src={facebook} alt="icon" />
              </a>
              <a target="_blank" rel="noreferrer"href="https://twitter.com/BMI_Espana" > 
              <img className="main-footer__icon" src={twitter} alt="icon" />
              </a>
              <a target="_blank" rel="noreferrer"href="https://workplace.com" > 
              <img className="main-footer__icon" src={workplace} alt="icon" />
              </a>
            </div>
          </div>
          <div className="main-footer__row-2">
            <h2 className=" heading-sm">Inspiring Diversity</h2>
            <p className="main-footer__short-desc">
              Thank you very much for visiting our page &#x2764;
            </p>
          </div>
        <div className="main-footer__lower"> &copy; Copyright 2022 </div>
      </div>
    </footer>
  );
};

export default Footer;
