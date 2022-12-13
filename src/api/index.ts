import { IDataInterface } from '../types';

type GetDataType = () => Promise<IDataInterface[]>;
const AUTH_KEY = 'Bearer 8zcjw338edzjhu4ljxudvvd4hi4m2ct2l2sg8lh1';

// Over API for the check
const JSPLACEHOLDER = 'https://jsonplaceholder.typicode.com/comments';
const BASE = 'https://api.json-generator.com/templates/YfDjINErULeA/data';

const fetchData: GetDataType = async () => {
  const res = await fetch(BASE, {
    headers: new Headers({
      Authorization: AUTH_KEY,
    }),
  }).then((response) => response.json());

  return res;
};

export default fetchData;
