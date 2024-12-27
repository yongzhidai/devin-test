import { pageConfigs } from '@/store/pages';
import { DynamicPageContent } from '@/components/business/DynamicPageContent';

export function generateStaticParams() {
  return Object.keys(pageConfigs).map((page) => ({
    page,
  }));
}

export default function DynamicPage({
  params,
}: {
  params: { page: string };
}) {
  return <DynamicPageContent params={params} />;
}
