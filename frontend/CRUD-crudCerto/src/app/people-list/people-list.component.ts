import { PeopleDetailsComponent } from './../people-details/people-details.component';
import { Observable } from "rxjs";
import { PeopleService } from "./../people.service";
import { People } from "../people";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.css"]
})
export class PeopleListComponent implements OnInit {
  people: Observable<People[]>;

  constructor(private peopleService: PeopleService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.people = this.peopleService.getPeopleList();
  }

  deletePeople(id: string) {
    this.peopleService.deletePeople(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  peopleDetails(id: string){
    this.router.navigate(['details', id]);
  }

  updatePeople(id: string){
    this.router.navigate(['update', id]);
  }
}
