import { Component } from "@angular/core";
import { ProductInfo } from "./ProductInfo";

@Component({
    selector:'my-comp',
    templateUrl:'./mycomp.component.html',
    styleUrls:['./mycomp.component.css']
})
export class MyComp{
    elecbrands:string[]=["LG","SamSung","L&T","IFB","Bajaj"];
    output:string[]=[];
    selected:string="";

    arr:ProductInfo[]=[
        new ProductInfo("LG",["Refrigerator","AC","Cooler","Washing Machine"]),
        new ProductInfo("SamSung",["Refrigerator","AC","Cooler","Washing Machine"]),
        new ProductInfo("L&T",["Laptop","AC","Cooler","Washing Machine"]),
        new ProductInfo("IFB",["Computer","AC","Cooler","Washing Machine"]),
        new ProductInfo("Bajaj",["Fans","AC","Cooler","Washing Machine"]),
    ]

    onClick():void{
        for(let i=0;i<this.arr.length;i++){
            if(this.arr[i].brandName==this.selected){
                this.output=this.arr[i].products;
            }
        }
    }

}