// Used to edit pricing based on a person's age or status. Mainly used for tickets, but is extendable to anything else.

// Price strategy
// Using strategy method 

class PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice;
  }
}

class AdultPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice * 1.0;
  }
}

class SeniorPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice * 0.7;
  }
}

class StudentPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice * 0.8;
  }
}

class ChildPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice * 0.5;
  }
}
