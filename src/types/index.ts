import { CSSProperties, Dispatch } from 'react';

export interface IDataInterface {
  [key: string]: any;
}

export type ContentItemArgsType = {
  style?: CSSProperties;
  optimData: IDataInterface;
  index: number;
  setChangedData: Dispatch<IDataInterface[]>;
  wholeData: IDataInterface[];
};

export type ContentItemType = (obj: ContentItemArgsType) => JSX.Element;
export type ButtonEventType = (e: React.MouseEvent<HTMLButtonElement>) => void;
