import "./about.scss";
import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stopLoading =  setTimeout(() => {
      setLoading(false);
    }, 1000);
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    
    
    return () => {
      clearTimeout(timerId);
      clearTimeout(stopLoading);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            />
          </h1>
          <p>
           I'm a passionate web developer with a comprehensive skill set encompassing C, C++, JavaScript, Python, SQL, MERN Stack.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. My enthusiasm for crafting dynamic and interactive web applications is matched only by my curiosity for data science.
          </p>
          <p>
            If I need to define myself in one sentence that would be an Innovative tech enthusiast with a penchant for meditation and mindfulness practices."
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} rotation={270} color="F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="EC4D28" />
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader type="ball-grid-pulse"/>}
    </>
  );
};

export default About;
