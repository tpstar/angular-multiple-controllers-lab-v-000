function ContactController() {
  var vm = this;
	this.name = 'Bill Gates';
	this.email = 'bill@microsoft.com';
  this.phone = '12345678910';

  this.changeName = function() {
    vm.name = 'Han Lee'
  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);
