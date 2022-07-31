import "./map.css";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

let icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === "K") {
    dist = dist * 1.609344;
  }
  if (unit === "N") {
    dist = dist * 0.8684;
  }
  return dist;
}

export const Map = () => {
  let store = [
    {
      latitude: 50,
      longitude: 80,
    },
    {
      latitude: 60,
      longitude: 80,
    },
  ];
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((el) => {
      setLocation({
        longitude: el.coords.longitude,
        latitude: el.coords.latitude,
      });
    });
  }, []);
  let d = 0;

  let nearStore = {
    latitude: 0,
    longitude: 0,
  };
  for (var i = 0; i < store.length; i++) {
    let l = distance(
      location.latitude,
      location.longitude,
      store[i].latitude,
      store[i].longitude,
      "K"
    );
    if (d < l) {
      d = l;
      nearStore.latitude = store[i].latitude;
      nearStore.longitude = store[i].longitude;
    }
  }

  return (
    <div>
      Nearest Store:
      <MapContainer
        className="leaflet-map map"
        center={[nearStore.latitude, nearStore.longitude]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store
          .filter((el) => {
            return el !== nearStore;
          })
          .map((el) => {
            return (
              <Marker position={[el.latitude, el.longitude]} icon={icon}>
                <Popup>Too Far</Popup>
              </Marker>
            );
          })}
        <Marker
          position={[nearStore.latitude, nearStore.longitude]}
          icon={icon}
        >
          <Popup>Closest Store</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
