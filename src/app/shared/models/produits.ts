export interface Produits
{
  id?:number;
  nom:string;
  prix:number;
  image:Blob;
  "@type"?:string;

  quantite?:number;
}

