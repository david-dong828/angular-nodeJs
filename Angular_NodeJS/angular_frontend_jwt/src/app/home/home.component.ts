import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  content?: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data=>{
        this.content = data;
      },
      error: err=>{console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        }
      }
    });
  }
}
