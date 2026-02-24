import { Component } from '@angular/core';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentResults } from "./investment-results/investment-results";
import {type AnnualInvestmentResult} from "./app.model";
import { InvestmentService } from './investment-service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, UserInput, InvestmentResults],
})
export class AppComponent {
  constructor(private investmentService: InvestmentService) {}

  annualResults:AnnualInvestmentResult[] = [];

  onUserInput(userInputParameters:any) {
    this.investmentService.calculateInvestmentResults(userInputParameters);
    this.annualResults = [...this.investmentService.AnnualInvestmentResult];
  }
}
