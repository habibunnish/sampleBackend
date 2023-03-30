import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AddNewDataService } from '../../services/guards/add-new-data.service';
import { AdminService } from '../../services/guards/admin.service';
import { BookingService } from '../../services/guards/booking.service';

@Component({
  selector: 'app-add-new-data',
  templateUrl: './add-new-data.component.html',
  styleUrls: ['./add-new-data.component.scss'],
})
export class AddNewDataComponent implements OnInit {
  
  location: any;
  file: any;
  id: any;
  chosenMod: any;

  @Output()
  change = new EventEmitter();

  locations = [
    { name: '' },
    { name: 'Chennai' },
    { name: 'goa' },
    { name: 'Banguluru' },
    { name: 'Jammu' },
  ];

  roomdetails = {
    id: 0,
    tittle: '',
    area: '',
    price: '',
    image: '',
    email: '',
    location: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private bookingService: BookingService,
    private adminService: AdminService,
    private addnewdataService: AddNewDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id != 0) this.GetEdits();
  }
  GetEdits() {
    this.addnewdataService.getedit(this.id).subscribe((data) => {
      console.log(data);
      this.roomdetails = data;
    });
  }

  adding(roomdetails: any) {
    roomdetails.image = this.file.name;
    this.addnewproduct(roomdetails);
    this.addProduct(roomdetails);
  }

  /*@post*/
  addnewproduct(roomdetails: any) {
    console.log(this.location);
    roomdetails.location = this.location;
    if (this.location == 'Chennai') {
      this.bookingService.addProductsDetails(roomdetails).subscribe((res) => {
        console.log(res);
      });
    } else if (this.location == 'Banguluru') {
      this.bookingService
        .addProductsDetailsbangluru(roomdetails)
        .subscribe((res) => {
          console.log(res);
        });
    } else if (this.location == 'goa') {
      this.bookingService
        .addProductsDetailsroyapuram(roomdetails)
        .subscribe((res) => {
          console.log(res);
        });
    } else if (this.location == 'Jammu') {
      this.bookingService
        .addProductsDetailsjammu(roomdetails)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  changedone(a: any) {
    console.log('method is run');
    console.log(a);
    this.location = a;
    console.log(this.location);
  }
  modo($event: any) {
    console.log('changing', $event.target.value);
    this.changedone($event.target.value);
  }

  /*@post :for showing in page*/
  addProduct(roomdetails: any) {
    console.log('addproduct method calling');
    roomdetails.locations = this.locations;
    console.log(roomdetails);
    this.adminService.addProductDetails(roomdetails).subscribe((res) => {
      console.log(res);
      alert('product added successfully');
    });
  }

  putting() {
    this.UpdateputProduct();
  }
  /*put:to edit details */
  UpdateputProduct() {
    console.log(this.roomdetails, this.roomdetails.id);
    console.log(this.roomdetails);
    this.adminService
      .putproduct(this.roomdetails.id, this.roomdetails)
      .subscribe((data: any) => {
        console.log(data);
        alert('product edited successfully');
      });
  }

  deletedata(data: any) {
    console.log('delete data() calling ', data.id);
    this.bookingService.deleteproductchennai(data.id).subscribe((res) => {
      console.log(res);
    });
    alert('deleted this details');
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file.name);
    this.roomdetails.image = this.file.name;
    console.log('getfile');
  }
  submitData() {
    let formData = new FormData();
    formData.set('file', this.file);
    this.http.post('http://localhost:3000/product', formData).subscribe((res) => {
      console.log(res);
    });
  }
  checkpage() {
    this.router.navigate(['get-product']);
  }
}
