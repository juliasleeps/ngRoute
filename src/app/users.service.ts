import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  private users = [
    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'},
    {id: 4, name: 'name4'}
  ]

  constructor() { }

  public getUsers(){
    return this.users
  }

  public getUserById(id: number){
    const findUser = this.users.find(user =>
      user.id === id);
    return findUser ? findUser : null;
  }
}


