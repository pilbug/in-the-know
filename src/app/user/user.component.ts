/** User Component v1.0
 * Last Updated: 2019.03.03 12:19 by Philip Bolognini
 * Inception: 2019.03.03 by Philip Bolognini
 * Description: Right now this component is unused, but the app will be expanded to allow for real users */

import { Component, OnInit } from '@angular/core';

export class UserComponent implements OnInit {

  name: string = 'Phil';
  password: string = 'foo';
  articlesViewed = [];
  accountStartDate: number = 20190303.1212; //YYYYMMDD.HHMM
  averageReadingTime: number = 0; //minutes
  totalReadingTime: number = 0; //minutes
  permissions = [];

  constructor() { }

  ngOnInit() {
  }

}
