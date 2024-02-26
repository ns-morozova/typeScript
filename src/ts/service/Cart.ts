import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getCostWithoutDiscount(): number {
        let cost: number = 0;
        for(let i = 0; i < this._items.length; i++) {
            cost = cost + this._items[i].price;
        }
        return cost;
    }

    getCostWithDiscount(discount: number): number {
        let cost: number = 0;
        for(let i = 0; i < this._items.length; i++) {
            cost = cost + this._items[i].price;
        }
        return cost - cost*discount/100;
    }

    del(id: number): void {
        this._items.splice(id,1);
    }
}