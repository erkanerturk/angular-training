import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null
    const filteredValue = filterText ? value.filter(item => item.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value
    return filteredValue;
  }

}
