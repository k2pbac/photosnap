interface Cost {
  monthly: string | number;
  yearly: string | number;
}

export default interface Pricing {
  type: string;
  description: string;
  cost: Cost;
}
