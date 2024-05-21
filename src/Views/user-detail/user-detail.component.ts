import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../app/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(id).subscribe(response => {
        this.user = response.data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
