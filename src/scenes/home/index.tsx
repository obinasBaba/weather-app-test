'use client';

import { IconButton, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';

import { WeatherCards } from '@/components/weather-cards';
import useLocationWeatherData from '@/hooks/use-location-weather-data';
import useWeatherData from '@/hooks/use-weather-data';
import { useGeoLocation } from '@/hooks/useGeoLocation';
import { Cancel, LocationOn } from '@mui/icons-material';
import { type UseQueryResult } from '@tanstack/react-query';
import type { WeatherData } from '@/hooks/use-weather-data';

const HomePage = () => {
  const [locationName, setLocationName] = useState<string>();
  const [weatherData, setWeatherData] = useState<UseQueryResult<WeatherData, Error>>();

  const formik = useFormik({
    initialValues: {
      locationName: '',
    },
    onSubmit: (values) => {
      setLocationName(values.locationName);
    },
  });

  const { position } = useGeoLocation();
  const currentWeather = useWeatherData(position);
  const locationWeather = useLocationWeatherData(locationName);

  const isLoading = useMemo(
    () => currentWeather.isLoading || locationWeather.isLoading || position === undefined,
    [currentWeather.isLoading, locationWeather.isLoading]
  );

  console.log('weatherData : ', weatherData, locationName, position);

  useEffect(() => {
    if (!currentWeather.isPending) {
      setWeatherData(currentWeather);
    }
  }, [currentWeather.isLoading, currentWeather.data]);

  useEffect(() => {
    if (locationName) {
      setWeatherData(locationWeather);
    } else {
      setWeatherData(currentWeather);
    }
  }, [locationWeather.isLoading, locationWeather.data, locationName]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-[8] p-10 items-center">
        <Paper
          className="max-w-[30rem] w-full p-2"
          component="form"
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <TextField
            required
            fullWidth
            variant="filled"
            label="Search Location"
            name="locationName"
            value={formik.values.locationName}
            onChange={formik.handleChange}
            placeholder="Enter City Name"
            className=""
            InputProps={{
              endAdornment: (
                <div className="flex gap-1 items-center">
                  {locationName && (
                    <IconButton
                      onClick={() => {
                        setLocationName('');
                        formik.resetForm();
                      }}
                      size="small"
                    >
                      <Cancel />
                    </IconButton>
                  )}

                  <LocationOn className="text-3xl" />
                </div>
              ),
            }}
          />
        </Paper>

        <WeatherCards isLoading={isLoading} weatherData={weatherData?.data?.weather} isError={!!weatherData?.isError} />
      </div>
    </div>
  );
};

export default HomePage;
