export interface Commande {
  indexOf(arg0: string): unknown
  zone: Zone
  commandeTailleBoissons: CommandeTailleBoisson[]
  commandePortionFrites: CommandePortionFrite[]
  commandeBurgers: CommandeBurger[]
  commandeMenus: CommandeMenu[]
}

export interface Zone {
  id: number
}

export interface CommandeTailleBoisson {
  quantite: number
  tailleBoisson: TailleBoisson
}

export interface TailleBoisson {
  quantite: number
  taille: Taille
  boisson: Boisson
}

export interface Taille {
  id: number
}

export interface Boisson {
  nom: string
  prix: number
}

export interface CommandePortionFrite {
  quantite: number
  portionFrite: PortionFrite
}

export interface PortionFrite {
  id: number
}

export interface CommandeBurger {
  quantite: number
  burger: Burger
}

export interface Burger {
  id: number
}

export interface CommandeMenu {
  quantite: number
  menu: Menu
}

export interface Menu {
  id: number
}
