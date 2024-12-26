declare module '@react-navigation/native' {
  export interface NavigationProp<T> {
    navigate: (screen: keyof T, params?: any) => void;
    goBack: () => void;
    setOptions: (options: Partial<any>) => void;
    addListener: (type: string, callback: () => void) => () => void;
  }

  export function useNavigation<T = any>(): NavigationProp<T>;
}

declare module 'react-native' {
  import * as React from 'react';
  
  export interface FlexStyle {
    flex?: number;
    flexDirection?: 'row' | 'column';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    margin?: number;
    padding?: number;
    backgroundColor?: string;
  }

  export interface ViewStyle extends FlexStyle {
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    width?: number | string;
    height?: number | string;
  }

  export interface TextStyle {
    fontSize?: number;
    color?: string;
    textAlign?: 'left' | 'right' | 'center';
  }

  export interface StyleSheet {
    create<T extends { [key: string]: ViewStyle | TextStyle }>(styles: T): T;
  }

  export const StyleSheet: StyleSheet;

  export interface ViewProps {
    style?: ViewStyle | ViewStyle[];
    children?: React.ReactNode;
  }

  export interface TextInputProps extends ViewProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    multiline?: boolean;
    numberOfLines?: number;
    style?: TextStyle | ViewStyle;
  }

  export interface TextProps {
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
  }

  export class View extends React.Component<ViewProps> {}
  export class Text extends React.Component<TextProps> {}
  export class TextInput extends React.Component<TextInputProps> {}

  export type ListRenderItemInfo<ItemT> = {
    item: ItemT;
    index: number;
    separators: {
      highlight: () => void;
      unhighlight: () => void;
      updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
    };
  };

  export type ListRenderItem<ItemT> = (info: ListRenderItemInfo<ItemT>) => React.ReactElement | null;

  export interface ScrollViewProps extends ViewProps {
    contentContainerStyle?: ViewStyle;
  }

  export interface FlatListProps<ItemT> extends ScrollViewProps {
    data: ReadonlyArray<ItemT>;
    renderItem: ListRenderItem<ItemT>;
    keyExtractor?: (item: ItemT, index: number) => string;
    style?: ViewStyle | ViewStyle[];
    contentContainerStyle?: ViewStyle | ViewStyle[];
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
    ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
    ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
    onRefresh?: () => void;
    refreshing?: boolean;
  }

  export class ScrollView extends React.Component<ScrollViewProps> {}
  export class FlatList<ItemT = any> extends React.Component<FlatListProps<ItemT>> {}

  export interface TouchableWithoutFeedbackProps extends ViewProps {
    onPress?: () => void;
    style?: ViewStyle;
  }

  export interface TouchableOpacityProps extends TouchableWithoutFeedbackProps {
    activeOpacity?: number;
  }

  export class TouchableOpacity extends React.Component<TouchableOpacityProps> {}
}
