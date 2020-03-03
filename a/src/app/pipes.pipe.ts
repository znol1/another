import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(Elements, search: string = ''): any {
    if (!search.trim()) {
      return Elements;
    }
    return Elements.sort();
  }

}
