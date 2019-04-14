/** In the Know App created by Philip Bolognini 2019.03.03 */
/** Thanks Ryan for the opportunity!! ☻ */

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ARTICLES } from './mock-server';
import { ArticleComponent } from './article/article.component';
import { UserComponent } from './user/user.component';
import { ArticleService } from './articles/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor() { }
  title = 'In The Know App';
  user: UserComponent = new UserComponent();

  ngOnInit() { } // created by CLI, let's leave here in case we need later
}
