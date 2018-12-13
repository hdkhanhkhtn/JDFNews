import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Article, Articles, Category, UserInfo } from './../article';
import { MyserviceService } from './../myservice.service';
import { ContentFilterPipe } from './../content-filter.pipe';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ ContentFilterPipe ]
})
export class CategoryComponent implements OnInit {

  @Input() articles: Articles;
  @Input() categoryinfo: Category;
  @Input() userInfo: UserInfo;

  constructor(
    private route: ActivatedRoute,
    private myService: MyserviceService
  ) { }

  ngOnInit() {
    this.getArticles();
    this.getUserInfo();
    this.getCategoryInfo();
  }

  getArticles(): void {
    const cid = +this.route.snapshot.paramMap.get('cid');
    this.myService.getCategory(cid)
    .subscribe(articleinfo => this.articles = articleinfo);
  }

  getUserInfo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myService.getUser(id)
    .subscribe(userinfo => this.userInfo = userinfo);
  }

  getCategoryInfo(): void {
    const cid = +this.route.snapshot.paramMap.get('cid');
    this.myService.getCategoryInfo(cid)
    .subscribe(categoryinfo => this.categoryinfo = categoryinfo);
  }

}
