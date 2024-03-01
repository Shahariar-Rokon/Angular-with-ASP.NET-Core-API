import { Component } from '@angular/core';
import { RepositoryService } from '../../Services/repository.service';
import { Product } from '../../Models/product';
import { Productcategory } from '../../Models/productcategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masteradd',
  templateUrl: './masteradd.component.html',
  styleUrl: './masteradd.component.css'
})
export class MasteraddComponent {
constructor(private service:RepositoryService,private router:Router){}
productList:Product[]=[];
productCategory:Productcategory[]=[]
productObj:Product={productID:0,name:'',productNumber:'',color:'',standardCost:0,listPrice:0,size:0,weight:0,productCategoryID:0}
productCatObj:Productcategory={name:'',productCategoryID:0,products:[]}
addProduct(){
  if(this.productObj.name!==null){
    var exr = JSON.stringify(this.productObj);
    var obj = JSON.parse(exr);
    this.productList.unshift(obj)
    this.productObj={productID:0,name:'',productNumber:'',color:'',standardCost:0,listPrice:0,size:0,weight:0,productCategoryID:0}
  }
}
addCategory(){
  const cate:Productcategory={
products:this.productList,
name:this.productCatObj.name,
productCategoryID:this.productCatObj.productCategoryID
  }
  this.service.postProduct(cate).subscribe({
    next:x=>{
      console.log(x)
this.router.navigate(['details'])
    }
  })
}
deleteProduct(exp: Product, arry: any[]) {
  const objWithTitle = arry.findIndex((obj) => obj.name == exp.name);
  if (objWithTitle > -1) {  arry.splice(objWithTitle, 1);  }
}
}
