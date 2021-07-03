import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
//Data Transfer Object class which is mapped to DTO class of spring application
export class Purchase {
    customer!:Customer;
    order!:Order;
    address!:Address;
    constructor(customer:Customer,address:Address,
        order:Order
        ){
            this.order=order;
            this.customer=customer;
            this.address=address;

    }

}
