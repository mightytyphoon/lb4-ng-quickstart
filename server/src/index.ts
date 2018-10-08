import {ServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ServerApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new ServerApplication(options);
  await app.static('/public' , './public');
  //rewrite unmatched url to index.html
/*  function redirectUnmatched(req, res) {
    res.redirect("http://www.mysite.com/");
  }*/
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
