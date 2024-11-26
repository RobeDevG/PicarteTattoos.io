
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const AddressMap = () => {
  const position = [23.0411, -81.5775];


  return (

<MapContainer
        center={position}
        style={{ height: "400px", width: "80%", borderRadius: "20px" }}
        zoom={1}
        
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Un marcador en Londres</Popup>
        </Marker>
      </MapContainer>




  );
};
