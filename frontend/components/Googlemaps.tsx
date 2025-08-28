import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const center = { lat: 27.09125, lng: -82.44252778 };
const Maps = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY || "",
  });

 if (loadError) {
    return (
      <section id="map">
        <h2 id="section-title">Find Us</h2>
        <p id="muted">Map failed to load.</p>
      </section>
    );
  }

  return (
    <main>
      <section id="map" className="section">
        <h2 className="section-title">Find Us</h2>
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