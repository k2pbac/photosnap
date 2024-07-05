interface Cost {
  monthly: number;
  yearly: number;
}

export default interface Pricing {
  type: string;
  description: string;
  cost: Cost;
}
