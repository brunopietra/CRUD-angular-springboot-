import { People } from '../people';
import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../people.service';
import { PeopleListComponent } from '../people-list/people-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['people']);
  }
}
