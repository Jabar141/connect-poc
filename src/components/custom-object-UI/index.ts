import { lazy } from 'react';

const CustomObjectUI = lazy(
  () => import('./custom-obj' /* webpackChunkName: "channels" */)
);

export default CustomObjectUI;
