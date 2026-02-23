import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { IPosts } from './post.model';
import { PostsHttpservices } from './PostsHttpservices';

@Component({
  selector: 'app-posts-http',
  standalone: false,
  templateUrl: './posts-http.html',
  styleUrl: './posts-http.scss',
})
export class PostsHttp implements OnInit, OnDestroy {
  loadedPosts: IPosts[] = [];
  isloading: boolean = false;
  error: any = null;
  errorSubscription: Subscription;

  constructor(
    // private _http: HttpClient,
    private postServices: PostsHttpservices,
  ) {}

  ngOnInit(): void {
    this.errorSubscription = this.postServices.error$.subscribe((errormessage) => {
      this.error = errormessage;
    });
  }

  OnCreatePost(PostData: { title: string; content: string }) {
    //send http request
    // console.log(PostData);
    // this._http
    //   .post('https://http-angular-d34be-default-rtdb.firebaseio.com/posts.json', PostData)
    //   .subscribe((response) => {
    //     // console.log(response);
    //   });
    this.postServices.CreatePost(PostData.title, PostData.content);
  }

  // OnfetchPosts() {
  //   this._http
  //     .get('https://http-angular-d34be-default-rtdb.firebaseio.com/posts.json')
  //     .subscribe((data) => {
  //       console.table(data);
  //     });
  // }
  OnfetchPosts() {
    this.isloading = true;

    this.postServices.FeatchPost().subscribe({
      next: (posts) => {
        this.isloading = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        // this.isloading = false;
        console.error(error);
        this.error = error.message;
      },
    });
    // this._http
    //   .get<{ [key: string]: IPosts }>(
    //     'https://http-angular-d34be-default-rtdb.firebaseio.com/posts.json',
    //   )
    //   .pipe(
    //     map((responseData: { [key: string]: IPosts }) => {
    //       const postsArray: IPosts[] = [];
    //       for (const key in responseData) {
    //         if (responseData.hasOwnProperty(key)) {
    //           postsArray.push({ ...responseData[key], id: key });
    //         }
    //       }
    //       return postsArray;
    //     }),
    //   )
    //   .subscribe({
    //     next: (posts) => {
    //       this.loadedPosts = posts;
    //       this.isloading = false;
    //     },
    //     error: (err) => {
    //       console.error(err);
    //       this.isloading = false;
    //     },
    //   });
  }

  OnclearPosts() {
    this.postServices.DeletePost().subscribe(() => {
      this.loadedPosts = [];
    });
  }
  OnhandleError() {
    this.error = null;
  }
  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
