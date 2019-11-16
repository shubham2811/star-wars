import { PlanetModule, LoginModule } from "../routes";

export const protectedRoutes = [
  {
    component: LoginModule,
    path: "/",
    exact: true
  },
  {
    component: PlanetModule,
    path: "/planets",
    exact: true
  }
];
