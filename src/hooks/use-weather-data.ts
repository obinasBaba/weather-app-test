import { useQuery } from '@tanstack/react-query';
import type { QueryFunction } from '@tanstack/react-query';

export const rolePermissionsKeys = {
  all: (position: GeolocationCoordinates) => ['role-permissions', position] as const,
};

export interface WeatherListItem {
  dt: 1724943600;
  main: {
    temp: 289.15;
    feels_like: 289.02;
    temp_min: 289.15;
    temp_max: 289.15;
    pressure: 1015;
    sea_level: 1015;
    grnd_level: 773;
    humidity: 85;
    temp_kf: 0;
  };
  weather: [{ id: 500; main: 'Rain'; description: 'light rain'; icon: '10d' }];
  clouds: { all: 100 };
  wind: { speed: 2.11; deg: 345; gust: 2.37 };
  visibility: 10000;
  pop: 0.88;
  rain: { '3h': 2.9 };
  sys: { pod: 'd' };
  dt_txt: '2024-08-29 15:00:00';
}

export interface WeatherData {
  weather: {
    cod: '200';
    message: 0;
    cnt: 40;
    list: WeatherListItem[];
    city: {
      id: 344979;
      name: 'Addis Ababa';
      coord: { lat: 9.0161; lon: 38.7686 };
      country: 'ET';
      population: 2757729;
      timezone: 10800;
      sunrise: 1724901402;
      sunset: 1724945721;
    };
  };
}

const fetcher: QueryFunction<WeatherData, ReturnType<(typeof rolePermissionsKeys)['all']>> = async ({
  queryKey,
  signal,
}) => {
  const [, position] = queryKey;

  const weatherData = await fetch(`/api/weather?units=metric&lat=${position.latitude}&lon=${position.longitude}`)
    .then(async (res) => await res.json())
    .catch((err) => {
      throw err;
    });

  return weatherData;
};

const useWeatherData = (position?: GeolocationCoordinates | null) => {
  const weather = useQuery({
    queryKey: rolePermissionsKeys.all(position as GeolocationCoordinates),
    staleTime: 10 * 1000,
    enabled: !!position,
    queryFn: fetcher,
    throwOnError: false,
    retryOnMount: false,
  });

  return weather;
};

export default useWeatherData;
