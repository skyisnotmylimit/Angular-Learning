export type AnnualInvestmentResult = {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}

export type UserInputParameters = {
  initialInvestment:number,
  annualInvestment:number,
  expectedReturn:number,
  duration:number
}


