import { Component, Output, EventEmitter } from '@angular/core';
import { type UserInputParameters } from '../app.model';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  @Output() userInput = new EventEmitter<UserInputParameters>();

  constructor(private investmentService: InvestmentService) {}

  userInputParameters:UserInputParameters = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  initialInvestmentInput: number = 0;
  annualInvestmentInput: number = 0;
  expectedReturnInput: number = 0;
  durationInput: number = 0;

  onCalculate() {
    this.userInputParameters = {
      initialInvestment: +this.initialInvestmentInput,
      annualInvestment: +this.annualInvestmentInput,
      expectedReturn: +this.expectedReturnInput,
      duration: +this.durationInput
    };
    this.userInput.emit(this.userInputParameters);
  }
}
