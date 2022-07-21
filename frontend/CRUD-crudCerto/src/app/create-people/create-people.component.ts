import { PeopleService } from '../people.service';
import { People } from '../people';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.css']
})
export class CreatePeopleComponent implements OnInit {

  people: People = new People();
  submitted = false;

  constructor(private peopleService: PeopleService,
    private router: Router) { }

  ngOnInit() {
  }

  newPeople(): void {
    this.submitted = false;
    this.people = new People();
  }

  save() {
    this.peopleService
    .createPeople(this.people).subscribe(data => {
      console.log(data)
      this.people = new People();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/people']);
  }
}
