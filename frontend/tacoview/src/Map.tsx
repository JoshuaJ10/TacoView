import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import './Map.css';
import 'leaflet/dist/leaflet.css';

const centerPosition = { lat: 39.8282, lng: -98.5795 };
const tacoBellLoc = { lat: 33.86903747253901, lng: -84.01614503328294 };

function getCurrentPosition() {

}

function LocationMarker() {
  const map = useMap();

  return (
    <Marker position={tacoBellLoc} eventHandlers={{ click: () => map.setView(tacoBellLoc, 30) }}>
      <Popup>Taco Bell.<br />Fairly Cheap.</Popup>
    </Marker>
  )
}

const Map = () => {
  const [zoom, setZoom] = useState(4);
  return (
    <MapContainer center={centerPosition} zoom={zoom} minZoom={2} worldCopyJump={true} scrollWheelZoom={true} className="map-container">
      <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;