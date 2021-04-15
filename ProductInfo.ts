export class ProductInfo{
    brandName:string;
    products:string[];

    constructor(bn:string,pr:string[]){
        this.brandName=bn;
        this.products=pr;
    }
}