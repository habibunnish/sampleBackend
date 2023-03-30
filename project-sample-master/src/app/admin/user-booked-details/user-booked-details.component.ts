import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/guards/cart.service';


@Component({
  selector: 'app-user-booked-details',
  templateUrl: './user-booked-details.component.html',
  styleUrls: ['./user-booked-details.component.scss'],
})
export class UserBookedDetailsComponent implements OnInit {
  Productuser: any;
  items:any;
  constructor(
    private cartService: CartService,
    private router:Router
  ) {}
  ngOnInit() {
    this.getalldetailsOfLocation();
  }
  //get
  getalldetailsOfLocation(){
    this.cartService.getaddcartDetailsOfAllLocation().subscribe(data=>{
      this.items=data;
      console.log(this.items);
      console.log(data);
    })
  }
 
  goback(){
    this.router.navigate(['get-product'])
  }
}
