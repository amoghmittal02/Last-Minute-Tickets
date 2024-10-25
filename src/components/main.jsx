
class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    login() {
      console.log("User logged in");
    }
  
    logout() {
      console.log("User logged out");
    }
  }
  
  class Admin extends User {
    constructor(name, email, password, isAdmin) {
      super(name, email, password);
      this.isAdmin = isAdmin;
    }
  
    addEvent(event) {
      console.log(`Event "${event.name}" added by Admin "${this.name}"`);
    }
  
    removeEvent(event) {
      console.log(`Event "${event.name}" removed by Admin "${this.name}"`);
    }
  
    viewSalesReport() {
      console.log("Sales report viewed by Admin");
    }
  }
  
  class Buyer extends User {
    constructor(name, email, password, creditCardNumber) {
      super(name, email, password);
      this.creditCardNumber = creditCardNumber;
      this.purchasedTickets = [];
    }
  
    purchaseTicket(ticket) {
      this.purchasedTickets.push(ticket);
      console.log(`Ticket for "${ticket.event.name}" purchased by Buyer "${this.name}"`);
    }
  
    viewTickets() {
      console.log(`Tickets purchased by Buyer "${this.name}":`);
      this.purchasedTickets.forEach((ticket) => console.log(`- ${ticket.event.name} (${ticket.price})`));
    }
  }
  
  class Seller extends User {
    constructor(name, email, password, companyName) {
      super(name, email, password);
      this.companyName = companyName;
      this.createdEvents = [];
    }
  
    createEvent(event) {
      this.createdEvents.push(event);
      console.log(`Event "${event.name}" created by Seller "${this.name}"`);
    }
  
    cancelEvent(event) {
      console.log(`Event "${event.name}" cancelled by Seller "${this.name}"`);
    }
  
    viewRevenue() {
      let totalRevenue = 0;
      this.createdEvents.forEach((event) => {
        event.ticketsSold.forEach((ticket) => {
          totalRevenue += ticket.price;
        });
      });
      console.log(`Revenue for Seller "${this.name}": ${totalRevenue}`);
    }
  }
  
  class Ticket {
    constructor(event, buyer, price) {
      this.event = event;
      this.buyer = buyer;
      this.price = price;
      event.addTicket(this);
    }
  
    viewTicketDetails() {
      console.log(`Ticket details for "${this.event.name}":`);
      console.log(`- Purchased by "${this.buyer.name}"`);
      console.log(`- Price: ${this.price}`);
    }
  }
  
class Payment {
    constructor(buyer, amount, date) {
      this.buyer = buyer;
      this.amount = amount;
      this.date = date;
      buyer.processPayment(this);
    }
  
    processPayment() {
      console.log(`Payment processed for Buyer "${this.buyer.name}"`);
    }
  
    viewPaymentDetails() {
      console.log(`Payment details for Buyer "${this.buyer.name}":`);
      console.log(`- Amount: ${this.amount}`);
      console.log(`- Date: ${this.date}`);
    }
  }
  
  class Event {
    constructor(name, date, location, ticketPrice) {
      this.name = name;
      this.date = date;
      this.location = location;
      this.ticketPrice = ticketPrice;
      this.ticketsSold = [];
    }
  
    addTicket(ticket) {
      this.ticketsSold.push(ticket);
    }
  
    removeTicket(ticket) {
      const index = this.ticketsSold.indexOf(ticket);
      if (index !== -1) {
        this.ticketsSold.splice(index, 1);
      }
    }
  
    viewEventDetails() {
      console.log(`Event details for "${this.name}":`);
      console.log(`- Date: ${this.date}`);
      console.log(`- Location: ${this.location}`);
      console.log(`- Ticket Price: ${this.ticketPrice}`);
    }
  
    viewTicketSalesReport() {
      console.log(`Ticket sales report for "${this.name}":`);
      console.log(`- Total tickets sold: ${this.ticketsSold.length}`);
      console.log(`- Total revenue: ${this.ticketsSold.length * this.ticketPrice}`);
    }
  }
class Payment {
  constructor(buyer, amount, date) {
    this.buyer = buyer;
    this.amount = amount;
    this.date = date;
    buyer.processPayment(this);
  }

  processPayment() {
    console.log(`Payment processed for Buyer "${this.buyer.name}"`);
  }

  viewPaymentDetails() {
    console.log(`Payment details for Buyer "${this.buyer.name}":`);
    console.log(`- Amount: ${this.amount}`);
    console.log(`- Date: ${this.date}`);
  }
}

class Event {
  constructor(name, date, location, ticketPrice) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.ticketPrice = ticketPrice;
    this.ticketsSold = [];
  }

  addTicket(ticket) {
    this.ticketsSold.push(ticket);
  }

  removeTicket(ticket) {
    const index = this.ticketsSold.indexOf(ticket);
    if (index !== -1) {
      this.ticketsSold.splice(index, 1);
    }
  }

  viewEventDetails() {
    console.log(`Event details for "${this.name}":`);
    console.log(`- Date: ${this.date}`);
    console.log(`- Location: ${this.location}`);
    console.log(`- Ticket Price: ${this.ticketPrice}`);
  }

  viewTicketSalesReport() {
    console.log(`Ticket sales report for "${this.name}":`);
    console.log(`- Total tickets sold: ${this.ticketsSold.length}`);
    console.log(`- Total revenue: ${this.ticketsSold.length * this.ticketPrice}`);
  }
}
  