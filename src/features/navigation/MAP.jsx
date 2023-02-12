import { useCallback, useMemo, useRef, useState } from 'react';
import { Popup } from 'react-leaflet/Popup'
import { Marker } from 'react-leaflet/Marker'
import { TileLayer } from 'react-leaflet/TileLayer'
import { MapContainer } from 'react-leaflet/MapContainer'


function GetMap() {
  const center = {
    lat: 42.395043,
    lng: 59.629945
  };
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      }
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default GetMap;
