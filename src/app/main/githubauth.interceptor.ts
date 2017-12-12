import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubauthInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authoriztion', '41cc19da12f9f900bebd0f693aff19c55cbbfeb9')
    });
    return next.handle(authReq);
  }
}
