
//DAY 6
//TASK 04 - write a class to calculate the Uber price.


class UberCalculator {
    
    constructor(distance, duration, basePrice, pricePerKm, pricePerMin) {
      this.distance = distance;
      this.duration = duration;
      this.basePrice = basePrice;
      this.pricePerKm = pricePerKm;
      this.pricePerMin = pricePerMin;
    }
  
    totalAmount() {
      return this.basePrice + (this.distance * this.pricePerKm) + (this.duration * this.pricePerMin);
    }
  }
  
  const appUber = new UberCalculator(10, 12, 50, 15, 2);
  console.log(appUber.totalAmount());


  // OUTPUT :
  // 150