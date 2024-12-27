import { menuItems } from '@/store/menu';

export function generateStaticParams() {
  const params: { page: string }[] = [];
  
  function collectParams(items: any[]) {
    items.forEach((item) => {
      if (item.children) {
        collectParams(item.children);
      } else if (item.key !== 'dashboard') {
        params.push({ page: item.key });
      }
    });
  }
  
  collectParams(menuItems);
  return params;
}
