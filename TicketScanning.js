//Using observer method
//scanning tickets 

class TicketScanner {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(ticket) {
    this.observers.forEach(observer => {
      observer.update(ticket);
    });
  }

  scan(ticket) {
    console.log("Ticket scanned");
    this.notify(ticket);
  }
}