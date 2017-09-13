angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource) {
    var WeatherChannel = $resource('https://api.hgbrasil.com/weather/?format=json&woeid=455977');

    var getWeather = function() {
        WeatherChannel.get().$promise.then(function(response) {
            $scope.tempo = response;
            console.log(response);
        }, function(promise) {
            alert("Erro ao requisitar Recurso!");
        })
    }
    getWeather();
});
