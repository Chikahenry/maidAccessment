import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../Header/Header.component';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule, HeaderComponent],
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  totalPages: number = 0;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers(this.page).subscribe(response => {
      this.users = response.data;
      this.totalPages = response.total_pages;
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.fetchUsers();
  }

  goToUserDetail(id: number): void {
    this.router.navigate(['/users', id]);
  }
}
