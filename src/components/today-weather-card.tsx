import { Divider, Skeleton, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';

import { WeatherListItem } from '@/hooks/use-weather-data';
import { findIcon } from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  weather?: WeatherListItem;
  loading: boolean;
  cityName: string;
}

export const TodayWeatherCard = ({ weather, loading, cityName }: Props) => {
  if (loading) {
    return (
      <div className="rounded-[2rem] p-8 bg-gray-100 flex gap-8 items-center justify-evenly w-[60rem]">
        <Skeleton variant="rectangular" width="100%" height={130} className="rounded-2xl" />
        <Divider orientation="vertical" flexItem />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-2xl" />
          <Skeleton variant="rectangular" width="100%" height={60} className="rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] p-8 bg-gray-100 flex gap-8 items-center justify-evenly">
      <div className="flex gap-8 items-center">
        <Typography variant="h1" className="text-[5rem]">
          {loading ? <Skeleton variant="text" width="10rem" height={50} /> : weather?.main.temp.toFixed(0)}
          <sup>°C</sup>
        </Typography>

        <div className="flex flex-col gap-4">
          <FontAwesomeIcon icon={findIcon(weather?.weather[0].description)} className="text-[6rem]" />

          <Typography variant="h3" fontWeight={400} textTransform="capitalize">
            {weather?.weather[0].description}
          </Typography>
        </div>
      </div>

      <Divider orientation="vertical" flexItem />

      <div className="location-date">
        <Typography variant="h2">{cityName}</Typography>
        <Typography variant="h4" fontWeight={400} color="gray">
          {moment(weather?.dt_txt).format('dddd, MMMM Do YYYY')}
        </Typography>
      </div>
    </div>
  );
};
