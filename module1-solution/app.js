(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.box_text = "";
  $scope.message = "";
  $scope.count_items = function(){
    if($scope.box_text===""){
      $scope.message = "Please enter data first";
    }
    else{
      var items = $scope.box_text.split(',');
      var count = items.length
      var i=0;
      for(i=0;i<=items.length-1;i++){
        if(items[i].trim()===""){
          count = count-1;
        }
      }
      if(count>3){
        $scope.message = "Too much!";
      }
      else{
        $scope.message = "Enjoy!";
      }
    }
  };
}
})();
