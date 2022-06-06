import Route from '../entities/Route';

export default interface RouteRepository {
  getAll(): Promise<Route[]>;
  save(route: Route): Promise<void>;
}
