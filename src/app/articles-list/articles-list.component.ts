/** Article List Component v1.0
 * Updated: 2019.03.04 12:21 by Philip Bolognini
 * Inception: 2019.04.03 by Philip Bolognini
 * Description: Exports a class that handles populating the list of articles retrieved from a data source */

import { Component, OnInit } from '@angular/core';

import { ArticleComponent} from '../article/article.component';
import { ArticleService } from '../articles/article.service';
// import { ARTICLES } from '../mock-server'; // used for testing when offline

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent implements OnInit {
  articles: ArticleComponent[] = [];
  articlesJSON: any = [];
  public filterRead = false;
  private filterButtonText = 'Unread Only';

  constructor(private as: ArticleService) { }

  ngOnInit() {
    this.draw();
  }

  private toggleFilterRead() {
    this.filterRead = !this.filterRead;
    this.filterButtonText = this.filterRead ? 'Show All' : 'Unread Only';
  }

  private draw() {
    this.as.getArticles().subscribe(
      arts => this.articlesJSON = arts,
      error => console.log(error),
      () => this.formatFromDataStream()
    );
  }

  // Helper Func: get article by id when testing. Could be used later by other classes
  private getArticleById(_id): ArticleComponent {
    for (const i in this.articles) {
      if (this.articles[i].id == Number(_id)) {
        return this.articles[i];
      }
    }
    return null;
  }

  //Format the JSON from a data stream into the array of Articles
  private formatFromDataStream() {
    for (const i in this.articlesJSON) {
      const a = new ArticleComponent();
      a.id = this.articlesJSON[i].Id;
      a.title = this.articlesJSON[i].Title;
      a.summary = this.articlesJSON[i].Summary;
      a.url = this.articlesJSON[i].Url;
      a.publishDate = this.articlesJSON[i].PublishDate;
      this.articles.push(a);
    }
  }

}
