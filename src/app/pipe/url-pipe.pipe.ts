import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlPipe'
})
export class UrlPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return encodeURI(value);
  }

}
