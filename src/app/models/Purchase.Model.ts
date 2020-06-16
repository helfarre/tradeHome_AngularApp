import { Stock } from "./Operation.Model";


    export class Category {
        id: number;
        name: string;
        stocks: any[];
    }


    export class Purchase {
        id: number;
        stock: Stock;
        quantity: number;
        stockPrice : number;
    }



