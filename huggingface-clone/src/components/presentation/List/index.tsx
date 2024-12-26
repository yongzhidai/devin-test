'use client';

import React from 'react';
import { List as AntList } from 'antd';
import type { ListProps as AntListProps } from 'antd';

export interface ListProps<T> extends Omit<AntListProps<T>, 'children'> {
  dataSource: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export const List = Object.assign(
  function List<T>(props: ListProps<T>) {
    return <AntList<T> {...props} />;
  },
  {
    Item: AntList.Item
  }
);
