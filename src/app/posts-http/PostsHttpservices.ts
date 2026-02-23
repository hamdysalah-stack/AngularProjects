import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from './post.model';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsHttpservices {
  // isloggedIn: boolean = false;
  isloggedIn: boolean = true;
  //handel error
  error$ = new Subject<string>();
  constructor(private _http: HttpClient) {}

  CreatePost(title: string, content: string) {
    const PostData: IPosts = { content: content, title: title };
    this._http
      .post('https://http-angular-d34be-default-rtdb.firebaseio.com/posts.json', PostData)
      .subscribe({
        next: (data) => {},
        error: (error) => {
          this.error$.next(error.message);
        },
      });
  }
  FeatchPost() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('pageIndex', 1);
    searchParams = searchParams.append('pageSize', 20);
    return this._http
      .get<{
        [key: string]: IPosts;
      }>('https://http-angular-d34be-default-rtdb.firebaseio.com/posts.json', {
        //send header and Query params wit  h request
        headers: new HttpHeaders({ 'coustom-header': 'welcome to angualr course' }),
        params: searchParams,
      })

      .pipe(
        map((responseData: { [key: string]: IPosts }) => {
          const postsArray: IPosts[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
      );
  }
  DeletePost() {
    return this._http.delete('https://http-angular-d34be-default-rtdb.firebaseio.com/posts.json');
  }
}
