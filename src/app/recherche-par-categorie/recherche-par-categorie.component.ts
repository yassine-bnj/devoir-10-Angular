import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits : Produit[] =[]; //un tableau de Produit
  categories! : Categorie[];
  IdCategorie! : number;
  /////
touslesproduit!: Produit[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
 
  }
  onChange() {
    // console.log(this.IdCategorie);
     this.produits =  this.produitService.rechercherParCategorie(this.IdCategorie);
     
     }

     supprimerProduit(p: Produit) {
      //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
      if (conf){
      
         this.produitService.supprimerProduit(p);
  
         this.produits =  this.produitService.rechercherParCategorie(this.IdCategorie);
         console.log(this.produits);
      }
    
  
    }
}
