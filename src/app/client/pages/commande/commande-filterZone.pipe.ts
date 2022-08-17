import { Pipe, PipeTransform} from '@angular/core'


@Pipe({
  name: 'commandeFilterZone'
})

export class commandeFilterPipeZone implements PipeTransform {
  transform(commandes: any[], searchTerm: string): any[]{
    if (!commandes || !searchTerm) {
      return commandes;
    }

    return commandes.filter(commande => commande.zone.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  }

}
