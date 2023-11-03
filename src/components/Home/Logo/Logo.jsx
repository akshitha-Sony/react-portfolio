import LogoS from "../../../../public/assets/images/logo-a-new.png";
import Tilt from "react-parallax-tilt";
import "./logo.scss";

const Logo = () => {

  return (
    <div className="logo-container">
      <Tilt transitionSpeed="5000">
        <img className="solid-logo" src={LogoS} alt="JavaScript,  Developer" />
      </Tilt>
    </div>
  );
};

export default Logo;
