import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  currentId: string;
  editClient: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  constructor(
    public route: ActivatedRoute,
    public clientService: ClientService
  ) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.params.id;

    this.clientService.getClient(this.currentId).subscribe( date => {
      this.editClient = date;
      console.log("this.editClient = ", this.editClient);
    }, error => {
      console.log(error);
    });

    // (this.clientService.client != undefined)
    //   ? this.editClient = this.clientService.getEditClient()
    //   : this.clientService.getClient(this.currentId).subscribe( date => {
    //       this.editClient = date;
    //       console.log("this.editClient = ", this.editClient);
    //     }, error => {
    //       console.log(error);
    //     });

  }

}
