import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  imports: [SearchComponent],
  standalone: true,
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
