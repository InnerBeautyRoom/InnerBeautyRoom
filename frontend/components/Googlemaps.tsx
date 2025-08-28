import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const center = { lat: 27.09125, lng: -82.44252778 };
const Maps = () => {
 
  const apiKey = "AIzaSyAq_-d7P3VeXsWBrtFK9OzVPCcTkj4RKUo";
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || "",
  });

 if (loadError) {
    return (
      <section id="map">
        <p id="muted">Map failed to load.</p>
      </section>
    );
  }

  return (
    <main>
      <section id="map" className="section">
        {isLoaded ? (
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerClassName="map-container"
            options={{ mapTypeControl: false, streetViewControl: false }}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div className="map-loading">Loading map…</div>
        )}
      </section>
    </main>
  );
};

export default Maps;