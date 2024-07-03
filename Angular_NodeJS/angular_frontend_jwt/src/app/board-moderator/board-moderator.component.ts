import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-board-moderator',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './board-moderator.component.html',
  styleUrl: './board-moderator.component.css'
})
export class BoardModeratorComponent {

  content?: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
}
