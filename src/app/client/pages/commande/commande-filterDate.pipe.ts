import { Pipe, PipeTransform} from '@angular/core'


@Pipe({
  name: 'commandeFilterDate'
})

export class commandeFilterPipeDate implements PipeTransform {
  transform(commandes: any[], searchTerm: string): any[]{
    if (!commandes || !searchTerm) {
      return commandes;
    }

    return commandes.filter((item:any)=>{
      const date=new Date(item.date)
      return date.toLocaleDateString()==new Date(searchTerm).toLocaleDateString()
    })
  }

}
