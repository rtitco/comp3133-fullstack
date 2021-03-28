import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, toReplace: string, replaceWith: string): string {
    return value.replace(toReplace, replaceWith);
  }
}
