import {inject} from '@loopback/context';
import * as fs from 'fs'
import {
  FindRoute,
  InvokeMethod,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
} from '@loopback/rest';

const SequenceActions = RestBindings.SequenceActions;

export class MySequence implements SequenceHandler {
  constructor(
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
  ) {}

  async handle(context: RequestContext) {
    try {
      const {request, response} = context;
      const route = this.findRoute(request);
      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);
      this.send(response, result);
    } catch (err) {
      context.response.sendFile('public/index.html', {root: './'})
      //if starts with /api it's a request to the api with no match, we can throw 404 or redirect
    /*  if(context.request.originalUrl.startsWith('/api' , 0)){
        //this.reject(context, err);
        context.response.redirect('/explorer')
      }
      else{
        //console.log(context.request.originalUrl)
        //console.log(fs.readdirSync('./'))
        //console.log(fs.readdirSync('./public'))
        //var angular = fs.readFileSync('./public/index.html' , 'utf-8')*/

      //}
      //this.reject(context, err);
    }
  }
}
