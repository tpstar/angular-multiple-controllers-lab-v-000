function ContactController() {
  var vm = this;
	this.name = 'Bill Gates';
	this.email = 'bill@microsoft.com';
  this.phone = '12345678910';
}

angular
	.module('app')
	.controller('ContactController', ContactController);
