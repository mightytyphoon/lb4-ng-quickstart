import {ServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ServerApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new ServerApplication(options);
  await app.static('/public' , './public');
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
