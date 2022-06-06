import Route from "../core/entities/Route";
import { RouteServiceFactory } from "../factory/RouteRouteServiceFactory.factory";
import { SaveRouteUseCase } from "./save-route.use-case";

describe("Save route", () => {
  let routeService = RouteServiceFactory.create();

  it("should not save a route when adress is outside of brasil", () => {
    const route = new Route("Teste", "Rua Teste 123  DF Argentina");
    const saveRouteUseCase = new SaveRouteUseCase(routeService);
    expect(() => {
      saveRouteUseCase.execute(route);
    }).toThrow("Address must be brazillian address");
  });

  it("should save brasilian address", () => {
    const route = new Route("Teste", "Rua Teste 123 Brasilia DF Brasil");
    const saveRouteUseCase = new SaveRouteUseCase(routeService);

    const promise = saveRouteUseCase.execute(route);
    expect(promise).resolves.toBeUndefined();
  });
});
