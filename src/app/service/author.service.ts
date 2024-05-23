import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private url = `${environment.base}`;
  private listaCambio = new Subject<Author[]>();

  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get<Author[]>(this.url + '/authors');
  }

  setList(listaNueva: Author[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
