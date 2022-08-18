import { Pipe, PipeTransform} from '@angular/core'


@Pipe({
  name: 'commandeFilter'
})

export class CommandeFilterClientPipe implements PipeTransform {
  transform(commandes: any[], searchTerm: string): any[]{
    if (!commandes || !searchTerm) {
      return commandes;
    }

    return commandes.filter(commande => commande.etat.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  }

}
