'use client';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { SearchBar } from '@/components/SearchBar/searchBar';

export default function Home() {
  return (
    <MapContainer center={[51.02489897289212, 4.479302413666469]} zoom={13} scrollWheelZoom={true} style={{ width: '100vw', height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[51.02489897289212, 4.479302413666469]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <SearchBar />
    </MapContainer>
  );
}
