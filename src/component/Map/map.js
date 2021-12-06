import { useRef, useState, useMemo } from "react";
import mapboxgl from "mapbox-gl";
import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";
import { Room } from "@material-ui/icons";
import { Selector } from "../Form/select";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Paginations } from "../Form/pagination";
import { GeoJSON } from "leaflet";
import "leaflet/dist/leaflet.css";
require("dotenv").config();

const Map = ({ received, locate, setLocate, arron, setArron }) => {
  mapboxgl.accessToken = `${process.env.REACT_APP_ACCESS_TOKEN}`;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [newArrondissement, setNewArrondissement] = useState(1);
  const [newTournage, setNewTournage] = useState("");
  const [paginate, setPaginate] = useState(null);
  const [ready, setReady] = useState(false);

  const [viewport, setViewport] = useState({
    width: 1500,
    height: 700,
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 11.7,
  });

  const layerStyle = {
    id: "line",
    type: "line",
    paint: {
      "line-color": "tomato",
      "line-gap-width": 0,
      "line-width": 3,
    },
  };

  const changeStateOfMarket = (id, longitude, latitude) => {
    setCurrentPosition(id);
    setViewport({
      ...viewport,
      latitude: latitude,
      longitude: longitude,
      zoom: 15,
    });
  };

  const foundRequest = async (arrond, arrond2, Name) => {
    const seconde_arr =
      arrond2.toString().length === 1
        ? "7500" + arrond2.toString()
        : "750" + arrond2.toString();
    let newUrl_arrondissement = `http://localhost:4000/Paris/Arrondissement?arr=${arrond}`;
    let newUrl_tournage = `http://localhost:4000/Paris/Tournage/films/3?arrondissement=${seconde_arr}`;
    /*let newUrl_nameOfTournage = `http://localhost:4000/Paris/Tournage/films?name=${Name}`;*/

    //********************
    //Arrondissement
    const res = await fetch(newUrl_arrondissement);
    const data = await res.json();
    setArron({ ...arron, features: data });
    //********************

    //********************
    //Lieux par arrondissement
    const res2 = await fetch(newUrl_tournage);
    const data2 = await res2.json();
    setLocate(data2);
    //********************

    /*fetch(newUrl_nameOfTournage)
      .then((res) => res.json())
      .then((data) => setLocate(data));*/
  };

  const markers = useMemo(
    () => (
      <>
        {locate.map((elem) => (
          <Marker
            key={elem._id}
            longitude={elem.geometry.coordinates[0]}
            latitude={elem.geometry.coordinates[1]}
          >
            <Room
              style={{
                fontSize: viewport.zoom * 3,
                color: "slateblue",
                cursor: "pointer",
              }}
              onClick={() =>
                changeStateOfMarket(
                  elem._id,
                  elem.geometry.coordinates[0],
                  elem.geometry.coordinates[1]
                ) + setClicked(true)
              }
            />
          </Marker>
        ))}
        <Marker longitude={2.3522219} latitude={48.856614}>
          <Room
            style={{
              fontSize: viewport.zoom * 3,
              color: "tomato",
              cursor: "pointer",
            }}
          />
        </Marker>
      </>
    ),
    [locate]
  );

  return (
    received && (
      <>
        {received && (
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1Ijoicm9tLTEiLCJhIjoiY2t0eDJrM3VxMHBxYzJzcGpvaWhvM3EzbyJ9.r1HaLlTYSdJnmGmJns9acw"
            }
            onViewportChange={setViewport}
            mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
            transitionDuration="1000"
          >
            <Source id="my-data" type="geojson" data={arron}>
              <Layer {...layerStyle} />
            </Source>
            {markers}
            {locate.map(
              (elem) =>
                elem._id === currentPosition && (
                  <Popup
                    latitude={elem.geometry.coordinates[1]}
                    longitude={elem.geometry.coordinates[0]}
                    closeButton={true}
                    onClose={() =>
                      setCurrentPosition(null) +
                      setViewport({
                        ...viewport,
                        latitude: 48.856614,
                        longitude: 2.3522219,
                        zoom: 11.7,
                      })
                    }
                    anchor="left"
                  >
                    <div
                      className="sample-popup"
                      style={{ fontSize: viewport.zoom }}
                    >
                      <label>Film</label>
                      <h2>{elem.properties.nom_tournage}</h2>
                      <label>Réalisateur</label>
                      <h3>{elem.properties.nom_realisateur}</h3>
                      <label>Producteur</label>
                      <h3>{elem.properties.nom_producteur}</h3>
                      <label>Tournage</label>
                      <p className="info">{elem.properties.type_tournage}</p>
                      <label>Adresse</label>
                      <p className="info">{elem.properties.adresse_lieu}</p>
                      <label>Début de la réalisation du film</label>
                      <p className="info">{elem.properties.date_debut}</p>
                      <label>Fin de la réalisation du film</label>
                      <p className="info">{elem.properties.date_fin}</p>
                    </div>
                  </Popup>
                )
            )}
            <div
              style={{
                display: "flex",
                height: "9%",
                width: "50%",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={1}>
                <TextField
                  id="outlined-basic"
                  placeholder="rechercher un tournage"
                  variant="outlined"
                  style={{ color: "black" }}
                  value={newTournage}
                  onChange={(e) => setNewTournage(e.target.value)}
                />
                <Selector
                  newArrondissement={newArrondissement}
                  setNewArrondissement={setNewArrondissement}
                />
                <Button
                  variant="outlined"
                  onClick={() =>
                    foundRequest(
                      newArrondissement,
                      newArrondissement,
                      newTournage
                    )
                  }
                >
                  Rechercher
                </Button>
              </Stack>
            </div>
            <div>
              <Paginations
                paginate={paginate}
                setPaginate={setPaginate}
                setLocate={setLocate}
                ready={ready}
                setReady={setReady}
              />
            </div>
          </ReactMapGL>
        )}
      </>
    )
  );
};

export default Map;
