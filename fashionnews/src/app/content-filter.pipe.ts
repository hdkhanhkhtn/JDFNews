import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(article: any, args?: any): string {
  	var body = article.body.replace(/srcset="(?:[^"\/]*\/)*([^"]+)"/g, "");
  	body = body.replace(/src='\/img\/(?:[\/]*\/)*([^']+)'/g, "src='" + article.site_name + "/$1'");
  	body = body.replace(/src="\/img\/(?:[\/]*\/)*([^"]+)"/g, "src='" + article.site_name + "/img/$1'");
    return body;
  }

}