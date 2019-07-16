import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Fetch users
   */
  fetchAllGithubUsers(): Observable<any> {
    let url = 'https://reqres.in/api/users';
    url = 'https://api.github.com/users';

    return this.httpClient.get(url);
  }
}
