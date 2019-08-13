import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Task[], search: string): Task[] {
    if (!items) { return []; }
    if (!search) { return items; }

    return items.filter(i => i.description.toLowerCase().includes(search.toLowerCase()));
  }
}