angular.module('aplicacao').service('AlunosCollectionService', function($filter) {

    var ordenarPorNome = false;
    var ordenarPorIdade = false;

    var alunos = [{ 'nome': 'Joãozinho', 'idade': 9 },
        { 'nome': 'Ricardinho', 'idade': 11 },
        { 'nome': 'Felipinho', 'idade': 11 },
        { 'nome': 'Zildinha', 'idade': 14 },
        { 'nome': 'Marianinha', 'idade': 10 },
        { 'nome': 'Luluzinha', 'idade': 12 }
    ];

    this.getAlunos = function(aluno) {
        return alunos;
    }

    this.adicionarAluno = function(aluno) {
        alunos.push(aluno);
    }

    this.ordenarPorNome = function() {
        ordenarPorNome = !ordenarPorNome;
        alunos = $filter('orderBy')(alunos, 'nome', ordenarPorNome);
    }

    this.ordenarPorIdade = function() {
        ordenarPorIdade = !ordenarPorIdade;
        alunos = $filter('orderBy')(alunos, 'idade', ordenarPorIdade);
    }

});