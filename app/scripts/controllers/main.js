'use strict';

/**
 * @ngdoc function
 * @name selectAllApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the selectAllApp
 */
angular.module('selectAllApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.items = [
    					{id : 1,name : 'Item 1'},
    					{id : 2,name : 'Item 2'},
    					{id : 3,name : 'Item 3'},
    					{id : 4,name : 'Item 4'},
    					{id : 5,name : 'Item 5'}
    				];

    $scope.selectedItems = [];

    $scope.toggleItem = function(item){
    	if($scope.selectedItems.length === 0){
    		$scope.selectedItems.push(item.id);
    	}else{
    		if($scope.selectedItems.indexOf(item.id) === -1){
    			$scope.selectedItems.push(item.id);
    		}
    		else{
    			$scope.selectAllItems = false;
    			$scope.selectedItems.splice($scope.selectedItems.indexOf(item.id),1);
    		}
    	}    	
    };

    $scope.selectAll = function(){    	
    	$scope.selectedItems.splice(0,$scope.selectedItems.length);
    	angular.element('.itemList').find('.col-md-4 input[type=checkbox]').prop('checked',false);
    	if($scope.selectAllItems){
    		for(var i=0;i<$scope.items.length;i++){
    			$scope.selectedItems.push($scope.items[i].id);
    		}
    		angular.element('.itemList').find('.col-md-4 input[type=checkbox]').prop('checked',true);
    	}
    };
  });
