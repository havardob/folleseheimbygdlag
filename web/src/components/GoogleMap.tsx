import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const aspectRatio = window.innerWidth > 1000 ? "21 / 9" : "16 / 9";

  useEffect(() => {
    const initialize = () => {
      if (!window.google || !mapRef.current) return;
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 60.4063808, lng: 5.1566011 },
        zoom: 16,
      });
      new window.google.maps.Marker({
        position: { lat: 60.4063808, lng: 5.1566011 },
        map: map,
      });
    };

    // Load the Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDxZ8QEdE9WqixJpBaXO-a1-Fqbp5KqQQM`;
    script.async = true;
    script.onload = initialize;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div ref={mapRef} style={{ width: "100%", aspectRatio: aspectRatio }} />
  );
};

export default GoogleMap;
