console.log('js');

const shellApp = angular.module('ShellApp',[]);

shellApp.controller('ShellController', ['$http', function($http){
    let self = this;
    self.number = 7;
    self.message = 'Hi-diddly-hey'

    $http({
        method: 'GET',
        url: '/shells'
    }).then(function(response){
        console.log(response)
        self.shells= response.data;        
    }).catch(function(error){
        alert()
        console.log('error: ', error);
        
    })



}]);
