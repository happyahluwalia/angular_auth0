import { Component, OnInit } from '@angular/core';
import { DealsService } from "app/deals/deals.service";
import { Deal } from "app/deals/deal.model";

@Component({
  selector: 'public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
 publicDeals: Deal[] = [];
 
  constructor(private dealService:DealsService) { }

  ngOnInit(): void {
    this.dealService.getPublicDeals()
      .then(deals => this.publicDeals = deals);
  }
  
  purchase(item){
    alert("You bought the: " + item.name);
  }
}