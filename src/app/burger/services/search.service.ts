import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    // Simulate API call. Replace this with your actual API endpoint.
    const apiUrl = `${environment.apiBaseUrl}/ingredients?q=${query}`;
    return this.http.get(apiUrl);
  }

  debounceSearch(observable: Observable<string>): Observable<any> {
    return observable.pipe(
      debounceTime(300), // Adjust the debounce time as needed (e.g., 300 milliseconds).
      distinctUntilChanged(),
      switchMap((query) => this.search(query))
    );
  }
}
