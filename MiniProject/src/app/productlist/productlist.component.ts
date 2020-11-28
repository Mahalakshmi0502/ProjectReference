import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products : any[] = [
    {id:1,name:"TV",price:1000,img:'/assets/Images/TV.jpg'},
    {id:1,name:"Bed",price:1000,img:'/assets/Images/bed.jpg'},
    {id:1,name:"Welcome",price:1000,img:'/assets/Images/Welcome.jpg'},
    {id:1,name:"Dining",price:1000,img:'/assets/Images/dining.jpg'},
    {id:1,name:"pic3",price:1000,img:'/assets/Images/pic3.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
