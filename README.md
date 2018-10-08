# Quick Start
*fast launch*
1. in cmd `git clone this repo`
2. in cmd : `cd this repo && npm run install`
3. this will install client and server, then launch the live dev.
    * angular app will refresh on changes here : http://localhost:4200
    * loopback server will reload on changes in code with nodemon and is alive here : http://localhost:3000


# Configuration Summary
*here are the steps for the configuration of this repo*
1. in cmd, root folder `ng new client` to init the client
2. go in angular client and delete the git folder
3. in cmd, root folder `lb4 server` to create the server
4. in cmd, root folder `npm init` to init the package.json
5. in cmd, root folder `git init` to init the git repo to https://github.com/mightytyphoon/lb4-ng-quickstart
6. add install and dev scripts to scripts in ./package.json
```json
"preinstall":"cd server && npm i",
"install":"cd client && npm i",
"postinstall": "npm run dev",
"preclient:dev" : "cd client && start /min ng build --watch --deploy-url /public/ --output-path ../server/public",
"client:dev" :"cd client && start /min ng serve",
"predev":"npm run client:dev",
"dev":"cd server && npm run clean && mkdir dist && start /min npm run build:watch",
"postdev":"cd server && nodemon --watch dist"
 ```
7. in server package.json
```json
"build:watch": "lb-tsc --watch --outDir dist",
```
8. add to server/src/index.ts
```typescript
await app.static('/public' , './public');
//this will serve the public folder of loopback on the root/public
//public is where angular app is
```
9. index.html is erased and replaced by index.html from Angular, so no need to change the basic configuration of loopback 4
10. we also keep in client/src/index.html the line `<base href="/">`
11. now we need to redirect the loading of the angular js files to root/public/*, this is done by adding a --deploy-url option to
