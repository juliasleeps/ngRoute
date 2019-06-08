import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  findUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService) { }

  

  ngOnInit() { 
    this.activatedRoute.paramMap.subscribe(params => {
      const userId = +params.get('id');
      console.log(userId)
      this.findUser = this.userService.getUserById(userId);
      console.log(this.findUser)
    })
  }

}
