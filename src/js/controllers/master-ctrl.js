/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore','$http', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

    //Post Departments
    $scope.postDepartment = function () {
              // use $.param jQuery function to serialize data from JSON
               var data ={
                 name:$scope.departmentName,
                  description:$scope.descriptionOfDepartment,
                  isActive: $scope.departmentIsActive
               };

               var config = {
                   headers : {
                       'Content-Type': 'application/json'
                   }
               }

               $http.post('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/departments', data, config)
               .success(function (data, status, headers, config) {
                   $scope.PostDataResponse = data;
                   console.log("dataa",data);
               })
               .error(function (data, status, header, config) {
                   $scope.ResponseDetails = "Data: " + data +
                       "<hr />status: " + status +
                       "<hr />headers: " + header +
                       "<hr />config: " + config;
               });
           };
}
