/** Article Component v1.1
 * Updated: 2019.03.04 12:21 by Philip Bolognini
 * Inception: 2019.03.03 by Philip Bolognini
 * Description: Exports a news article class gets displayed in a list and a user can view */

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @Input() id: number;
  @Input() title = 'unloaded';
  @Input() summary = 'unloaded';
  @Input() url = 'N/A';
  @Input() publishDate = 'N/A';
  @Input() filterRead; // hide this article when true, injected by parent list

  read = false; // false until gets completion status from saved data

  //Style Related Vars
  DEFAULT_BG_COLOR = 'lavender';
  READ_BG_COLOR = 'darkgrey';
  @Input() bgColor = this.DEFAULT_BG_COLOR;

  dataStore: LocalStorageService = new LocalStorageService();

  constructor() { }

  ngOnInit() {
    const list = LocalStorageService.get();
    for (const i in list) {
      if (this.id == list[i]) {
        this.setComplete();
      }
    }
  }

  private setComplete(): void {
    this.read = true;
    this.updateStyles();
  }

  private updateStyles(): void {
    if (this.read) {
      this.bgColor = this.READ_BG_COLOR;
    }
  }

  private getFormatedDate(): Date {
    return new Date(this.publishDate).toDateString();
  }

  private getDisplay(): string {
    return this.read && this.filterRead ? 'none' : 'block';
  }

  private gotoArticle(): void {
    if(window.open(this.url, '_blank')) {
      this.setComplete();
      this.dataStore.addToReadingList(this);
    }
  }

}
