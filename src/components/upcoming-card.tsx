import { Divider, Skeleton, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';

import { findIcon } from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { WeatherListItem } from '@/hooks/use-weather-data';

interface Props {
  weather?: WeatherListItem;
  loading: boolean;
  cityName: string;
}

export const UpcomingCard = ({ weather, loading, cityName }: Props) => {
  if (loading) {
    return (
      <div className="rounded-[2rem] p-8 bg-gray-100 flex gap-4 items-center justify-evenly w-full">
        <Skeleton variant="rectangular" width="100%" height={120} className="rounded-2xl" />
        <Divider orientation="vertical" flexItem />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-2xl" />
          <Skeleton variant="rectangular" width="100%" height={60} className="rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-[2rem] p-8 bg-gray-100 flex gap-8 items-center">
      <div className="flex flex-col gap-8">
        <Typography align="center" variant="h5">
          {moment(weather?.dt_txt).format('dddd')}
        </Typography>

        <Divider orientation="horizontal" flexItem />

        <div className="flex gap-8 items-center">
          <FontAwesomeIcon icon={findIcon(weather?.weather[0].description)} className="text-[4rem]" />

          <div className="flex flex-col">
            <div className="flex gap-4">
              <Typography variant="h6" fontWeight={400}>
                Temp :
              </Typography>
              <Typography variant="h5">
                {loading ? <Skeleton variant="text" width="10rem" height={50} /> : weather?.main.temp}
                <sup>°C</sup>
              </Typography>
            </div>

            <div className="flex gap-4">
              <Typography variant="h6" fontWeight={400}>
                Humidity :
              </Typography>
              <Typography variant="h5">
                {loading ? <Skeleton variant="text" width="10rem" height={50} /> : weather?.main.temp}
                <sup>°C</sup>
              </Typography>
            </div>

            <div className="flex gap-4">
              <Typography variant="h6" fontWeight={400}>
                Weather :
              </Typography>
              <Typography fontWeight={400} textTransform="capitalize">
                {weather?.weather[0].description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
