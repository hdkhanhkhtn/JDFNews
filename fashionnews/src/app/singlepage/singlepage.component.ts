import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Article, UserInfo } from './../article';
import { MyserviceService } from './../myservice.service';
import { ContentFilterPipe } from './../content-filter.pipe';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css'],
  providers: [ ContentFilterPipe ]
})
export class SinglepageComponent implements OnInit {

  @Input() articleInfo: Article;
  @Input() userInfo: UserInfo;

  constructor(
    private route: ActivatedRoute,
    private myService: MyserviceService
  ) { }

  ngOnInit() {
    this.getArticle();
    this.getUserInfo();
    console.log(this.userInfo);
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myService.getArticle(id)
    .subscribe(articleinfo => this.articleInfo = articleinfo);
  }

  getUserInfo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myService.getUser(id)
    .subscribe(userinfo => this.userInfo = userinfo);
  }

}
