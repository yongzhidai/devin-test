'use client';

import React from 'react';
import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps } from 'antd';

export type InputProps = AntInputProps;

export const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};

export const Search: React.FC<InputProps> = (props) => {
  return <AntInput.Search {...props} />;
};
