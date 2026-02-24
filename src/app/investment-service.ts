import { Injectable } from '@angular/core';
import { type UserInputParameters } from './app.model';
import { type AnnualInvestmentResult } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  annualInvestmentResult: AnnualInvestmentResult[] = [];

  calculateInvestmentResults(userInputParameters: UserInputParameters):void {
    this.annualInvestmentResult = [];
    const {
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration
    } = userInputParameters;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualInvestmentResult.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }

  get AnnualInvestmentResult(): AnnualInvestmentResult[] {
    return this.annualInvestmentResult;
  }
}
