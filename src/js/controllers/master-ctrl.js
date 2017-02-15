/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl, 'Auth']);

function MasterCtrl($scope, $cookieStore, Auth) {
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

    $scope.addDepartments = function () {
      console.log("add dept ");
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
