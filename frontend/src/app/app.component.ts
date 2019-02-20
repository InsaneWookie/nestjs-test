import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mame Highscores';

  isLoggedIn = false;

  constructor(private readonly authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
    this.isLoggedIn = false;

    this.router.navigate(['/login']);

  }
}
