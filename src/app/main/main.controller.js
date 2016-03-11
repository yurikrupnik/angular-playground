(function() {
  'use strict';

  angular
    .module('myDirectives')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, $http) {
    var vm = this;




    vm.gridOptions = { enableFiltering: true, enableCellEdit: true };
    vm.gridOptions.enableCellEditOnFocus = true;

    //vm.gridOptions.columnDefs = [
    //  { name: 'id', enableSorting: false },
    //
    //
    //  { name: 'age', enableCellEditOnFocus: true, displayName:'age (f2/dblClick edit)', width: 200  },
    //  { name: 'address.city', enableCellEdit: true, width: 300, enableFiltering: false },
    //  { name: 'name', displayName: 'Name (editOnFocus)', width: 200}
    //];
    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
      .success(function(data) {
        vm.gridOptions.data = data;
      });


    vm.gridParams = {
      enableCellEditing: true
    };
    vm.shit = false;
    //vm.shit.shown = true;
    $scope.shown = true;
    //vm.awesomeThings = [];
    //vm.classAnimation = '';
    //vm.creationDate = 1456077270827;
    //vm.showToastr = showToastr;
    //
    //vm.toggleInController = function () {
    //  vm.shown = !vm.shown;
    //};
    //
    //activate();
    //
    //function activate() {
    //  getWebDevTec();
    //  $timeout(function() {
    //    vm.classAnimation = 'rubberBand';
    //  }, 4000);
    //}
    //
    //function showToastr() {
    //  toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //  vm.classAnimation = '';
    //}
    //
    //function getWebDevTec() {
    //  vm.awesomeThings = webDevTec.getTec();
    //
    //  angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //    awesomeThing.rank = Math.random();
    //  });
    //}
  }
})();
