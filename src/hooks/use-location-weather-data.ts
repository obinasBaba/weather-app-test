import { WeatherData } from '@/hooks/use-weather-data';
import { useQuery } from '@tanstack/react-query';
import type { QueryFunction } from '@tanstack/react-query';

export const key = {
  all: (position: string) => ['location-weather', position] as const,
};

const fetcher: QueryFunction<WeatherData, ReturnType<(typeof key)['all']>> = async ({ queryKey, signal }) => {
  const [, position] = queryKey;

  const weatherData = await fetch(`/api/location-weather?units=metric&location=${position}`)
    .then(async (res) => await res.json())
    .catch((err) => {
      throw err;
    });

  return weatherData;
};

const useLocationWeatherData = (position?: string | null) => {
  const weather = useQuery({
    queryKey: key.all(position as string),
    staleTime: 10 * 1000,
    enabled: !!position,
    queryFn: fetcher,
    throwOnError: false,
    retryOnMount: false,
  });

  return weather;
};

export default useLocationWeatherData;
