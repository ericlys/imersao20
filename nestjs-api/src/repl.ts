import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}
bootstrap();

//npm run start:dev -- --entryFile=repl
//ex: await get(RoutesService).findAll()
//await get(RoutesDriverService).processRoute({route_id: '675ee5b7a01918c51680eb74', lat: 111, lng: 222})