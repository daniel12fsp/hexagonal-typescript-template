
import { RouteServiceFactory } from '../../../../factory/RouteRouteServiceFactory.factory';
import { ListRoutesAllFieldUppercaseUseCase } from '../../../../use-cases/list-routes-all-field-uppercase.use-case';
import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import schema from './schema';

const routeService = RouteServiceFactory.create();


const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  const listRoutesUppercase = new ListRoutesAllFieldUppercaseUseCase(
    routeService
  );
  const routes = await listRoutesUppercase.execute();
  return formatJSONResponse({
    message: `Hello, welcome to the exciting Serverless world!`,
    routes,
  });
};

export const main = middyfy(hello);
