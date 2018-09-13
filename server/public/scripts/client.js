console.log('js');

const shellApp = angular.module('ShellApp',[]);

shellApp.controller('ShellController', [function(){
    let self = this;
    self.number = 7;
    self.message = 'Hi-diddly-hey'

}]);
