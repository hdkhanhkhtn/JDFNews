import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article, Category, Articles, UserInfo } from './article';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private apiUrl = 'http://hackathon.rubygroupe.jp/khanhhd_api/api/v1';
  private newsAPIUrl = 'http://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getArticle(id: number): Observable<Article> {
    const url = `${this.apiUrl}/article/${id}`;
    this.http.get<Article>(url).subscribe(
      x => console.log('Observer got a next value: ', x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
    return this.http.get<Article>(url).pipe(
      tap(_ => console.log(`Fetched article url = ${url}`)),
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }

  getArticles(cid: number, limit: number): Observable<Article[]> {
    var queryStr = '';
    if (limit) {
      queryStr += `limit=${limit}`;
    }
    var url = `${this.apiUrl}/articles`;
    if (cid) {
      url = `${url}/${cid}`;
    }
    if (queryStr !== '') {
      url = `${url}?${queryStr}`;
    }

    return this.http.get<Article[]>(url).pipe(
      tap(articles => console.log(`Fetched article query string = ${queryStr}`)),
      catchError(this.handleError(`getArticles`, []))
    );
  }

  getCategory(cid: number): Observable<Articles> {
    var queryStr = '';
    var url = `${this.apiUrl}/category`;
    if (cid) {
      url = `${url}/${cid}`;
    }
    if (queryStr !== '') {
      url = `${url}?${queryStr}`;
    }

    return this.http.get<Articles>(url).pipe(
      tap(articles => console.log(`Fetched category query string = ${queryStr}`)),
      catchError(this.handleError<Articles>(`getCategory id=${cid}`))
    );
  }

  getCategoryInfo(id: number): Observable<Category> {
    const url = `${this.apiUrl}/categoryinfo/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => console.log(`Fetched Category url = ${url}`)),
      catchError(this.handleError<Category>(`getArticle id=${id}`))
    );
  }

  /**
   * GET user by id. Will 404 if id not found
   */
  getUser(id: number): Observable<UserInfo> {
    const url = `${this.newsAPIUrl}/users/${id}`;
    return this.http.get<UserInfo>(url).pipe(
      tap(_ => console.log(`fetched user id = ${id}`)),
      catchError(this.handleError<UserInfo>(`getUser id=${id}`))
    );
  }

  getUsers(): Observable<UserInfo[]> {
    const url = `${this.newsAPIUrl}/users`;
    return this.http.get<UserInfo[]>(url).pipe(
      tap(users => console.log('fetched users')),
      catchError(this.handleError('getUsers', []))
    );
  }

  /**
   * Handle Http operation that failed
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
