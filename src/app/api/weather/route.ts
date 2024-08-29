import { NextResponse } from 'next/server';
import qs from 'qs';

import { URLSearchParams } from '@whatwg-node/node-fetch';
import type { NextRequest } from 'next/server';

const key = process.env.WEATHER_FORECAST_OPEN_WEATHER_API_KEY;

export async function GET(req: NextRequest, res: NextResponse) {
  console.log('req : ', req.url);

  const searchParams = new URLSearchParams(req.url);

  const { lat, lon }: any = { lat: searchParams.get('lat'), lon: searchParams.get('lon') };

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?${qs.stringify({
      lat,
      lon,
      days: 3,
      appid: key,
    })}`;

    const weather = await fetch(url).then(async (res) => await res.json());

    if (weather.cod !== '200') {
      // response with error message
      throw new Error(weather.message, {
        cause: weather,
      });
    }

    return NextResponse.json({ weather });
  } catch (error) {
    console.error('Error -------- :', error);

    return NextResponse.json(
      {
        error: 'Internal Server Error',
      },
      {
        status: 500,
      }
    );
  }
}
