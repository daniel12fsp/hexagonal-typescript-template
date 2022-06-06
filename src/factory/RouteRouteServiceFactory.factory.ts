import { RouteService } from "../core/services/Route.service";
import { RouteMemoryDatabase } from "../data-sources/memory-database/Route.memory-database";

export class RouteServiceFactory {
  static create(enverioment: string = "production") {
    const routeRepository = this.createRepository(enverioment);
    return new RouteService(routeRepository);
  }

  private static createRepository(enverioment: string = "production") {
    return new RouteMemoryDatabase();
  }
}
