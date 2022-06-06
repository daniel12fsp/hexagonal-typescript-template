import Route from "../../core/entities/Route";
import RouteRepository from "../../core/repositories/Route.repository";


export class RouteMemoryDatabase implements RouteRepository {
  routes: Route[] = [];

  async getAll(): Promise<Route[]> {
    return this.routes;
  }

  async save(route: Route): Promise<void> {
    this.routes.push(route)
    return Promise.resolve();
  }
}
