import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./portfolio.scss";
import Loader from "react-loaders";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);
  const [portfolioDB, setPortfolioDB] = useState([]);

  useEffect(() => {
    const stopLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(stopLoading);
    };
  });

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    setPortfolioDB(querySnapshot.docs.map((doc) => doc.data()));
    portfolioDB.reverse();
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioDB)}</div>
      </div>
      {loading && <Loader type="ball-grid-pulse" />}
    </>
  );
};

export default Portfolio;
