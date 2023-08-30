import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { LocationContainer, MapContainer } from "../../Styles/location";
import { SectionName } from "../../Styles/products";

export default function Location() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) {
    return (
      <LocationContainer>
        <h1>loading ... </h1>
      </LocationContainer>
    );
  }

  return (
    <LocationContainer>
      <SectionName mr={1}>موقعنا</SectionName>
      <MapContainer>
        <GoogleMap
          zoom={13}
          center={{ lng: 39.177, lat: 21.551 }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={{ lng: 39.177, lat: 21.551 }} />
        </GoogleMap>
      </MapContainer>
    </LocationContainer>
  );
}
