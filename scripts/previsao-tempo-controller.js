angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource) {
    var WeatherChannel = $resource('http://api.openweathermap.org/data/2.5/weather?q=Patos,BR&units=metric&APPID=35485fe87c10402c2b0c3695a0cd0d3b');

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