import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrls: ['./update-people.component.css']
})
export class UpdatePeopleComponent implements OnInit {

  id: string;
  people: People;

  constructor(private route: ActivatedRoute,private router: Router,
  private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = new People();

    this.id = this.route.snapshot.params['id'];

    this.peopleService.getPeople(this.id)
      .subscribe(data => {
        console.log(data)
        this.people = data;
      }, error => console.log(error));
  }

  updatePeople() {
    this.peopleService.updatePeople(this.id, this.people)
      .subscribe(data => {
        console.log(data);
        this.people = new People();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatePeople();
  }

  gotoList() {
    this.router.navigate(['/people']);
  }
}
