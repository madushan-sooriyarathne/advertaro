import {
  withScriptjs,
  GoogleMap,
  Marker,
  withGoogleMap,
} from "react-google-maps";

const FullWidthMap = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 6.840108, lng: 79.871117 }}
      >
        <Marker position={{ lat: 6.840108, lng: 79.871117 }} />
      </GoogleMap>
    );
  })
);

export default FullWidthMap;
