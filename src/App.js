import "./App.css";
import { useRef, useState, useEffect } from "react";
import Nav from "./component/Nav/nav";
import Map from "./component/Map/map";
import "./component/Map/style/map.css";
import Footer from "./component/Footer/footer";

function App() {
  const url_tournage = "http://localhost:4000/Paris/tournage";
  const url_arrondissment = "http://localhost:4000/Paris/Arrondissement?arr=1";

  const [locate, setLocate] = useState([]);
  const [arron, setArron] = useState([]);
  const [received, setReceived] = useState(false);

  useEffect(() => {
    return (
      fetch(url_tournage)
        .then((res) => res.json())
        .then((data) => setLocate(data)) +
      fetch(url_arrondissment)
        .then((res) => res.json())
        .then((data) => setArron({ type: "FeatureCollection", features: data }))
    );
  }, []);
  console.log(arron);
  return (
    <div className="container-map">
      <div className="header">
        <Nav />
      </div>
      <div className="container-body">
        <div className="describe-container">
          <div className="accroche-container">
            <p
              style={{
                width: "80%",
                fontSize: "32px",
                color: "white",
                borderRadius: "20px",
                boxShadow: "3px 2px 5px grey",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Filmaron est une application qui a pour objectif de géolocaliser
              tout les lieux de tournages de films à Paris ! Je vous laisse les
              découvrir en cliquant sur le bouton juste en dessous
            </p>
          </div>
          <div className="button-container">
            <a className="link-button" href="#map-container">
              <button
                className="home-button"
                onClick={() => setReceived(received === received && !received)}
              >
                Afficher la carte
              </button>
            </a>
          </div>
        </div>
        <br></br>
        <div id="map-container">
          <Map
            received={received}
            locate={locate}
            setLocate={setLocate}
            arron={arron}
            setArron={setArron}
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
