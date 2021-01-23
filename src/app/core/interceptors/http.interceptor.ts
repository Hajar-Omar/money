import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AppConfigService } from "../services/app-config/app-config.service";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(private appConfigService: AppConfigService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith(".json")) return next.handle(req); // to pass json files

    const authReq = req.clone({
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.appConfigService.getAppConfig.token}`,
      }),
    });
    return next.handle(authReq);
  }
}
