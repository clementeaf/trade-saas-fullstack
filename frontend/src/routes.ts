export interface RoutePath {
  home: string;
  operaciones: string;
  [key: string]: string;
}

export const routes: RoutePath = {
  home: '/',
  operaciones: '/operaciones',
};

