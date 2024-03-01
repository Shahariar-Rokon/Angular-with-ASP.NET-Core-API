import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../Services/repository.service';
import { Router } from '@angular/router';
import { Product } from '../../Models/product';
import { Productcategory } from '../../Models/productcategory';

@Component({
  selector: 'app-masterview',
  templateUrl: './masterview.component.html',
  styleUrl: './masterview.component.css'
})
export class MasterviewComponent implements OnInit {
  productList:Productcategory[]=[]
constructor(private service:RepositoryService,private router:Router){}
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(x=>{
     this.productList = x.map((item)=>({
      productCategoryID:item.productCategoryID,
      name:item.name,
      products: item.products
     }))
      })
  }
  deleteProducCategories(categoryId: number){
    this.service.deleteProductandCategory(categoryId).subscribe({
      next: (response) => {
        let currentUrl = this.router.url;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([currentUrl]);
          });
      }
    });
  }

}
