import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles:Article[];

  constructor(){
    this.articles=[
new Article('Angular', 'https://angular.io', 5),
new Article('Google', 'https://google.ie', 3),
new Article('TikTok', 'https://tiktok.com', 1)
    ];
  }
addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean{
this.articles.push(new Article(title.value, link.value,1));
title.value='';
link.value='';

  console.log(`Adding Article Title: ${title.value} and adding Article Link: ${link.value}`);
  return false;
}
sortedArticle() : Article[]{
  return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
}
}
