/**
 * Main Controller
 */


 angular.module('RDash')
     .controller('mainController', ['$scope', '$cookieStore','Auth',mainController]);

 function mainController($scope, $cookieStore,Auth) {
      alert('controller initializing');
     $scope.addDepartments = function () {
 alert('contr');
       //cookieStore
     //   $scope.getUserId = $cookieStore.get('userId');
     //   $scope.userToken = $cookieStore.get('token');
     //   $scope.sessionId = $cookieStore.get('sessionId');

       var departmentInfo = {
         name:$scope.departmentName,
         description:$scope.descriptionOfDepartment,
         isActive: $scope.departmentIsActive,
       }
       Auth.addDepartment(departmentInfo)
       .success(function(data){
         console.log('departmentInfo', data);

         ngToast.create({
           className: 'success',
           content: 'category created'
         });

        }).error(function(data){
            ngToast.create({
               className: 'warning',
               content: 'Problem '
            });
     });
    };
 }
