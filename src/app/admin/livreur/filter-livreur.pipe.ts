import { Pipe, PipeTransform} from '@angular/core'


@Pipe({
  name: 'filterLivreur'
})

export class LivreurFilterPipe implements PipeTransform {
  transform(livreurs: any[], searchTerm: string): any[]{
    if (!livreurs || !searchTerm) {
      return livreurs;
    }

    return livreurs.filter(livreur => livreur.etat.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  }

}
