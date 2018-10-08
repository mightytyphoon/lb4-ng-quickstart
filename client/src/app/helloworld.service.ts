import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class HelloService{
  constructor(private http : HttpClient){}
  public async greetServer() : Promise<any>{
    await this.http.get('localhost:3000/hello').subscribe(data => {
      return data
    })
  }
  public async getPing() : Promise<any>{
    return this.http.get('http://localhost:3000/ping').toPromise()
  }
}
