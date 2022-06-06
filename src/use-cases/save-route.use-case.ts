import Route from "../core/entities/Route";
import { RouteService } from "../core/services/Route.service";

export class SaveRouteUseCase {
  constructor(private routeService: RouteService) {}
  execute(route: Route) {
    return this.routeService.save(route);
  }
}
