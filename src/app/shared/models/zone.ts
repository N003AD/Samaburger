export interface Zone {
  "@context": string
  "@id": string
  "@type": string
  "hydra:member": HydraMember[]
  "hydra:totalItems": number
}

export interface HydraMember {
  "@id": string
  "@type": string
  nom: string
  prix: number
  commande: Commande[]
}

export interface Commande {
  "@id": string
  "@type": string
  id: number
  reference: string
  dateAt: string
  montant: number
  etat: string
}
