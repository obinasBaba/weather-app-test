import {
  faCloud,
  faCloudMeatball,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faMeteor,
  faSmog,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

export const findIcon = (condition?: string) => {
  switch (condition) {
    case 'clear':
      return faCloud;
    case 'sunny':
      return faSun;
    case 'mist':
      return faCloudMeatball;
    case 'cloudy':
      return faCloudSunRain;
    case 'partly cloudy':
      return faCloudSun;
    case 'overcast':
      return faSmog;
    case 'blizzard':
      return faMeteor;
    case 'fog':
      return faSmog;
    case 'light rain':
      return faCloudRain;
    case 'medium rain':
      return faCloudRain;
    case 'heavy rain':
      return faCloudRain;
    case 'light snow':
      return faCloudRain;
    case 'medium snow':
      return faCloudRain;
    case 'heavy snow':
      return faCloudRain;
    default:
      return faCloudSun;
  }
};
