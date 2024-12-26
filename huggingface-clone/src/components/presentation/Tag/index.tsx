import React from 'react';
import { Tag as AntTag } from 'antd';
import type { TagProps as AntTagProps } from 'antd';

export interface TagProps extends AntTagProps {
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children, ...props }) => {
  return (
    <AntTag {...props}>
      {children}
    </AntTag>
  );
};
