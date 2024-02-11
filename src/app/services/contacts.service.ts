import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Contact} from "../model/Contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  public getContacts(pageSize: number, pageNumber: number): Observable<any> {
    console.log(environment.apiUrl);
    const params = new HttpParams()
      .append('page', pageNumber)
      .append('size', pageSize);
    return this.http.get<any>(`${environment.apiUrl}` + `/contacts`, { params: params });
  }

  public addContact(contact: Contact): Observable<Contact> {
    return this.http.post<any>(`${environment.apiUrl}` + `/contacts`, contact);
  }
}
