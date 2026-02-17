import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  getDefinition(word: string): Observable<Object> {
    const url = `/api/merriam?word=${encodeURIComponent(word)}`;
    return this.http.get(url);
  }
}
