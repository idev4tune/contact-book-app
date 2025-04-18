import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  urn: string = "api/v1/contacts";
  url: string = environment.apiBaseUrl + this.urn;

  constructor(
    private http: HttpClient,
  ) { }

}
