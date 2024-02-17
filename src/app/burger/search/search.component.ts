import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  private searchSubject = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService
      .debounceSearch(this.searchSubject)
      .subscribe((results) => {
        // Handle API response here
        console.log(results);
      });
  }

  search(event: any): void {
    const query = event.target.value;
    if (query.length >= 3) {
      this.searchSubject.next(query);
    }
  }
}
