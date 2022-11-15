import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  newProduit = new Produit();
  constructor(private produitService: ProduitService,private router:Router) { }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }

  addProduit() {

    this.newCategorie =this.produitService.consulterCategorie(this.newIdCat);
this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
  }

}
