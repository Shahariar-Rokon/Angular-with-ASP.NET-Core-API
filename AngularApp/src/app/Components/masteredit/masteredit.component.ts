import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../Services/repository.service';
import { Productcategory } from '../../Models/productcategory';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-masteredit',
  templateUrl: './masteredit.component.html',
  styleUrl: './masteredit.component.css'
})
export class MastereditComponent implements OnInit {
  constructor(private router: Router,
    private route: ActivatedRoute,private service: RepositoryService){
  }
  categoryList:Productcategory[]=[];  
  productList:Product[]=[];  
  productObj:Product={ productID:0,name:'',productNumber:'',color:'',standardCost:0,listPrice:0,size:0,weight:0,productCategoryID:0  }
  categoryObj:Productcategory={ productCategoryID:0,name:'',products:[]}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.service.getCategory(Number(id)).subscribe({
            next:(res)=>{
              if(res.products){
                this.productList = res.products
                this.categoryObj ={
                  productCategoryID:res.productCategoryID,
                  name:res.name,
                  products:this.productList
              }
              }
            }
          })
        }
      }
    })
  }
  deleteProduct(exp: Product, arry: any[]) {
    const objWithTitle = arry.findIndex((obj) => obj.name == exp.name);
    if (objWithTitle > -1) {  arry.splice(objWithTitle, 1);  }
  }
  addCategory(){
    const cate:Productcategory={
  products:this.productList,
  name:this.categoryObj.name,
  productCategoryID:this.categoryObj.productCategoryID
    }
    this.service.postProduct(cate).subscribe({
      next:x=>{
        console.log(x)
  this.router.navigate(['details'])
      }
    })
  }
  updateProductCategories(){
    this.service.updateProductCategory(this.categoryObj.productCategoryID, this.categoryObj)
      .subscribe({
        next: (response) => {
          this.router.navigate(['details']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  addProduct(){
    if(this.productObj.name!==null){
      var exr = JSON.stringify(this.productObj);
      var obj = JSON.parse(exr);
      this.productList.unshift(obj)
      this.productObj={productID:0,name:'',productNumber:'',color:'',standardCost:0,listPrice:0,size:0,weight:0,productCategoryID:0}
    }
  }
  }

