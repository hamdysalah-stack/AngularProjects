import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false,
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, PropName: string): any {
    if (value === 0 || filterString === '') return value;
    else {
      const resultArray = [];
      for (let server of value) {
        //value == list of servers
        if (server[PropName] === filterString) {
          resultArray.push(server);
        }
      }
      return resultArray;
    }
  }
}
