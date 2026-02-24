import { Component } from '@angular/core';
import {type AnnualInvestmentResult} from "../app.model";
import {Input} from "@angular/core";

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input() AnnualInvestmentResult: AnnualInvestmentResult[] = [];

}
