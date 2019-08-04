import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private authListnerSubs: Subscription;

  @Output() menuClickEvent = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.getIsAuth();
    this.authListnerSubs = this.authService.getAuthStatusLister()
    .subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  toggleMenu() {
    this.menuClickEvent.emit();
  }

  ngOnDestroy() {
    this.authListnerSubs.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
