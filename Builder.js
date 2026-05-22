// creating an online order
class Order {
	userId;
	item;
	quantity;
	shippingAddress;
	billingAddress;
	shipping;
	payment;
	comment;

	constructor(userId) {
		this.order = {userId};
	}

	addItem(item) {
		this.order.item = item;
		return this;
	}

	addQuantity(quantity) {
		this.order.quantity = quantity;
		return this;
	}

	addShippingAddress(shippingAddress) {
		this.order.shippingAddress = shippingAddress;
		return this;
	}

	addBillingAddress(billingAddress) {
		this.order.billingAddress = billingAddress;
	}

	addShipping(shipping) {
		this.order.shipping = shipping;
		return this;
	}
	addPayment(payment) {
		this.order.payment = payment;
		return this;
	}

	addComment(comment) {
		this.order.comment = comment;
	}

	build() {
		if (!this.order.billingAddress)
			this.order.billingAddress = this.order.shippingAddress;
		if (!this.order.quantity)
			this.order.quantity = 1;
		if (!this.order.comment)
			this.order.comment = null;
		return this.order;
	}
}

// comment, quantity, and billing address don't have to be explicitly added

const order = new Order('122')
	.addItem('Charging Cable')
	.addQuantity(2)
	.addShippingAddress('100 First Street, Prague, Czechia')
	.addShipping('USPS')
	.addPayment('500')
	.build();

console.log(JSON.stringify(order));