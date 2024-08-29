import { metaObject } from '@/config/site.config';
import HomePage from '@/scenes/home';

export const metadata = {
  ...metaObject(),
};

export default function Home() {
  return <HomePage />;
}
