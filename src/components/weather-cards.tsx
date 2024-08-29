import { Alert, Skeleton, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import { TodayWeatherCard } from '@/components/today-weather-card';
import { UpcomingCard } from '@/components/upcoming-card';
import { faWeightScale, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { WeatherData, WeatherListItem } from '@/hooks/use-weather-data';

interface Props {
  weatherData?: WeatherData['weather'];
  isLoading: boolean;
  isError: boolean;
}

export const WeatherCards = ({ weatherData, isLoading, isError }: Props) => {
  const today = useMemo(() => (weatherData?.list || [])[0], [weatherData]);

  if (isError) {
    return (
      <Alert severity="error" className="w-full">
        Something went wrong!
      </Alert>
    );
  }

  if (!weatherData && !isLoading) {
    return (
      <div className="rounded-[2rem] p-8 bg-gray-100 flex gap-8 items-center justify-evenly w-[60rem] mt-[10rem]">
        <Alert severity="error" className="w-full">
          <Typography variant="h5" color="error">
            No Data Found!
          </Typography>
        </Alert>
      </div>
    );
  }

  return (
    <div className="p-10 flex flex-col gap-8 mt-[5rem]">
      <TodayWeatherCard weather={today} loading={isLoading} cityName={weatherData?.city?.name as string} />

      <div className="flex gap-4">
        {(isLoading ? [1, 2, 3, 4] : weatherData?.list)
          ?.slice(1, 4)
          .map((item, idx) => (
            <UpcomingCard
              key={idx}
              weather={item as WeatherListItem}
              loading={isLoading}
              cityName={weatherData?.city?.name as string}
            />
          ))}
      </div>

      <div className="flex gap-8">
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={120} className="rounded-2xl" />
        ) : (
          <div className="flex-1 rounded-[1rem] p-8 bg-gray-100 flex gap-8 items-center">
            <FontAwesomeIcon icon={faWeightScale} className="text-4xl" />
            <Typography variant="h5">Pressure : </Typography>
            <Typography variant="h3">{today?.main?.pressure} mb</Typography>
          </div>
        )}

        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={120} className="rounded-2xl" />
        ) : (
          <div className="flex-1 rounded-[1rem] p-8 bg-gray-100 flex gap-8 items-center">
            <FontAwesomeIcon icon={faWind} className="text-4xl" />
            <Typography variant="h5">Wind : </Typography>
            <Typography variant="h3">{today?.wind?.speed} mph</Typography>
          </div>
        )}
      </div>
    </div>
  );
};
