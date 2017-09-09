angular.module('aplicacao').controller('ListagemAlunosController', function($scope, $filter, AlunosCollectionService) {
    $scope.nome = 'Adriano Pequeno';
    var nome = "Lá Lá Lá";

    $scope.hoje = new Date();

    $scope.iniciado = true;
    $scope.cadastrar = false;

    $scope.alunos = AlunosCollectionService.getAlunos();

    $scope.finalizar = function() {
        $scope.iniciado = false;
    }

    $scope.iniciar = function() {
        $scope.iniciado = true;
    }

    $scope.ordenarPorNome = function() {
        AlunosCollectionService.ordenarPorNome();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.ordenarPorIdade = function() {
        AlunosCollectionService.ordenarPorIdade();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.exibeCadastro = function() {
        $scope.cadastrar = !$scope.cadastrar;
    }

});