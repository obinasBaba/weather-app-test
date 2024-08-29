import { useEffect, useState } from 'react';

export const useGeoLocation = () => {
  const [position, setPosition] = useState<GeolocationCoordinates | null>();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      async (position) => {
        setPosition(position.coords);
        console.log('position : ', position.coords);
      },
      (err) => {
        if (err.PERMISSION_DENIED) setPosition(null);
        console.log('error : ', err);
      }
    );
  }, []);

  return { position };
};
