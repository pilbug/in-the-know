/** Article Component v1.0
 * Last Updated: 2019.03.04 12:21 by Philip Bolognini
 * Inception: 2019.03.04 by Philip Bolognini
 *  Description: Service that stores the user data for persistance.
 *  Local Storage for now, but this app could be extended to push to a server */

import { Injectable } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Injectable({
  // Service created by the root app injector
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /** Reading List is specific to articles.
   * If this service is repurposed, it should be agnostic of the things it gets and posts */
  private readingList = [];

  private static post(txt: string): void {
    localStorage.setItem('reading-list', txt);
  }

  static get() {
    const localStorageItem = JSON.parse(localStorage.getItem('reading-list'));
    return localStorageItem == null ? [] : localStorageItem;
  }

  public addToReadingList(art: ArticleComponent): any {
    this.readingList = LocalStorageService.get();
    for (const i in this.readingList) {
      if (art.id == this.readingList[i]) {
        return; // Don't add this to the readingList if it's already in there
      }
    }
    this.readingList.push(art.id);
    LocalStorageService.post(JSON.stringify(this.readingList));
    return this.readingList;
  }
}
