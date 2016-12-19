function StaffController() {
  var vm = this;
  this.name = 'Steve Jobs';
  this.email = 'steve@apple.com';
  this.phone = '12345678912';
}

angular
	.module('app')
	.controller('StaffController', StaffController);
