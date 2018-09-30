import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  newsletterform;
  covers;

  constructor() { }

  ngOnInit() {
    this.newsletterform = new FormGroup({});

    this.covers = [
    {
      img: 'http://www.style-arena.jp/images/snaps/201807/2018071815310-01.jpg',
      name: 'Shiho',
      age: '23 Age',
      desc: '“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street'
    },{
      img: 'http://www.style-arena.jp/images/snaps/201706/2017062214263-01.jpg',
      name: 'Airi',
      age: '20 Age',
      desc: 'Shibuya5th week Jul. 2017'
    },{
      img: 'http://www.style-arena.jp/images/snaps/201706/2017062214260-01.jpg',
      name: 'Sara',
      age: '19 Age',
      desc: 'Shibuya3rd week Jul. 2017'
    },{
      img: 'http://www.style-arena.jp/images/snaps/201706/2017060114194-01.jpg',
      name: 'Shiho',
      age: '23 Age',
      desc: '“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street'
    },{
      img: 'http://www.style-arena.jp/images/snaps/201705/2017051114151-01.jpg',
      name: 'Shiho',
      age: '23 Age',
      desc: 'Shibuya5th week Jul. 2017'
    },{
      img: 'http://www.style-arena.jp/images/snaps/201706/2017062214263-01.jpg',
      name: 'Airi',
      age: '20 Age',
      desc: 'Shibuya5th week Jul. 2017'
    }
    ];
  }

}
