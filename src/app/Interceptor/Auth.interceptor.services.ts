import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsHttpservices } from '../posts-http/PostsHttpservices';

@Injectable()
export class Authinterceptorservices implements HttpInterceptor {
  constructor(private PostHttpServices: PostsHttpservices) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //req is immutabele => can't change it instanaclly

    console.log('Request sending to back end or next interceptor ................');
    // return next.handle(req);
    if (this.PostHttpServices.isloggedIn) {
      const ModeifiedReq = req.clone({
        headers: req.headers.append('token', 'Bearer wdefgrtfkwddjefhejlnfwefhnwquofbw'),
      });
      return next.handle(ModeifiedReq);
    } else {
      return next.handle(req);
    }
  }
}
