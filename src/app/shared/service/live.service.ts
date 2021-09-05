import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LiveService {

 apiUrl = 'http://localhost:3306/';

  constructor() { }
}
