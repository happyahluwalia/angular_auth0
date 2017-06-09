import { Component, OnInit } from '@angular/core';
import { DealsService } from "app/deals/deals.service";
import { Deal } from "app/deals/deal.model";

@Component({
  selector: 'public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
 publicDeals: Deal[];
 
  constructor(private dealService:DealsService) { }

  ngOnInit() {
    this.dealService.getPublicDeals()
        .subscribe(deals => this.publicDeals = deals);
  }

}
