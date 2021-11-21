import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Blog} from './blog-type';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  Blogs: any[] = [];
  loginStatusService = false;

  blogs: Blog[] = [
    {
      "id": 1,
      "image": "assets/images/blog/SWAB_success.png",
      "heading": "How does it work?",
      "blogDate": "November 21, 2021",
      "blogDetail": "Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.",
      "subHeading": ""
    },
    {
      "id": 1,
      "image": "assets/images/blog/SWAB_success.png",
      "heading": "How does it work?",
      "blogDate": "November 21, 2021",
      "blogDetail": "Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.",
      "subHeading": ""
    }
  ];


  constructor(public http: HttpClient) {
  }

  public getBlog(): Observable<any> {
    this.Blogs = this.blogs;
    return of(this.blogs);
  }

  // public getBlog(): Observable<any> {
  //   this.http.get<any>('https://api.npoint.io/aba0bbc3361bfc50d277').subscribe((d: any) => (this.Blogs = d));
  //   return this.http.get<any>('https://api.npoint.io/aba0bbc3361bfc50d277');
  // }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser') !== null) {
      this.loginStatusService = true;
    }
  }

}
