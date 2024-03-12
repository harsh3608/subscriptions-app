import { HttpInterceptorFn } from '@angular/common/http';

export const authConfigInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
