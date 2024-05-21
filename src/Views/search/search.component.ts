import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router: Router) {
    
   }

  onSearch(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    if (input) {
      this.router.navigate(['/users', input]);
    }
  }
}