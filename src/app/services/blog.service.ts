import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Blog} from '../classes/blog'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  constructor(private http:HttpClient) { }
}
