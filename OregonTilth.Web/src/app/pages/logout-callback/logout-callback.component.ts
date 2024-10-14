import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieStorageService } from 'src/app/shared/services/cookies/cookie-storage.service';

@Component({
  selector: 'oregontilth-logout-callback',
  standalone: true,
  imports: [],
  templateUrl: './logout-callback.component.html',
  styleUrl: './logout-callback.component.scss'
})
export class LogoutCallbackComponent implements OnInit {
  private cookieService: CookieStorageService = inject(CookieStorageService);
  private router: Router = inject(Router);
  constructor() { }

  ngOnInit(): void {  
    this.cookieService.removeAll();
    this.router.navigateByUrl("/");

  }

}
