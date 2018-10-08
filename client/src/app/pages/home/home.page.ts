import { Component } from '@angular/core';
import { HelloService } from '../../helloworld.service'

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
  title = 'client';
  helloFromServer : string
  timeout : number
  ping : any
  constructor(private hello : HelloService){
    console.log('angular will ask through service to get ping in'+ this.timeout +' secs')
    this.timeout = 5
    var interval = setInterval(() => {
      this.timeout = this.timeout - 1
    }, 1000)
    this.ping = 'Angular will ask ping to Loopback in '
    //this.hello.greetServer().then(data => {console.log(data)})
    setTimeout(() => {
    this.hello.getPing().then(data => {
    this.ping = data.greeting
    clearInterval(interval)
    this.timeout = null
    console.log('SUCCESS : loopback has responded')
    console.log(data)
  })
}, 5000)

  }
}
