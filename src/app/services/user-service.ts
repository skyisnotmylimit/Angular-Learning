import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly httpClient = inject(HttpClient);
  getAllUsers(){
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }
}
