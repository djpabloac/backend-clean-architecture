import { Router } from 'express'

export interface RouteResult {
  routesPrivate: Router;
  routesPublic?: Router;
}