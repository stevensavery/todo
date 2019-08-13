import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models';
import * as _ from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(items: Task[], order = ''): Task[] {
    if (!items || order === '') { return items; }
    if (items.length <= 1) { return items; }

    return _.orderBy(items, ['id'], [order]);
  }
}