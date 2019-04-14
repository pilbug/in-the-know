/** Article Component v1.1
 * Last Updated: 2019.03.05 12:21 by Philip Bolognini
 * Inception: 2019.03.03 by Philip Bolognini
 *  Description: Service that runs an API call to the News Feed JSON */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ARTICLES } from '../mock-server'; // used for offline testing

@Injectable({
  // Service created by the root app injector
  providedIn: 'root'
})
export class ArticleService {
  getArticles() {
    return this.http.get(this.configURL);
  }
  configURL = 'https://api.asicentral.com/v1/lists/news.json';
  constructor(private http:HttpClient) { }
}
