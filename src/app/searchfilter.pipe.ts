import { Commande } from './shared/models/commande';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Commandes: Commande[], searchValue: string): Commande[] {
    if (!Commandes || searchValue) {
      return Commandes;
    }
    return Commandes.filter(commande =>
      commande.montant.toLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
