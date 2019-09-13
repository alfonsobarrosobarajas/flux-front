import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Concept } from './Concept';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  concepts: any = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getContacts().subscribe(
      res => {

        this.concepts = res;
      },
      err => {
        console.log(err);
      }

    );
  }

}
