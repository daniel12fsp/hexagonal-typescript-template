import { RouteService } from "../core/services/Route.service";

export class ListRoutesAllFieldUppercaseUseCase {
    constructor(private routeService: RouteService) {}
    async execute() {
        const routes = await this.routeService.getRoutes();
        return routes.map(route => {
            return {
                name: route.name.toUpperCase(),
                address: route.address.toUpperCase()
            }
        });
    }
}