import { Category } from "./Purchase.Model";


export class Stock {
    id: number;
    name: string;
    symbol: string;
    category: Category;
    High : number;
    Low : number;
    Open : number;
    Close : number;
}

export class Operation {
    id: number;
    stock: Stock;
    operationNature: string;
    quantity : number;
    price: number;
    date: Date;
}

