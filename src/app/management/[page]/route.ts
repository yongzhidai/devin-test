import { pageConfigs } from '@/store/pages';

export function generateStaticParams() {
  return Object.keys(pageConfigs).map((page) => ({
    page,
  }));
}
