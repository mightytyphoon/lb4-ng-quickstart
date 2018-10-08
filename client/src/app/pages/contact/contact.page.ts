import { Component } from '@angular/core';
import { HelloService } from '../../helloworld.service'

@Component({
  selector: 'contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css']
})
export class ContactPage {
  constructor(private hello : HelloService){

  }
}
