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
    //datepicker
    //$('#datetimepicker1').datetimepicker();

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
           //Post category
           $scope.postCategory = function () {
                     // use $.param jQuery function to serialize data from JSON
                      var data ={
                         name:$scope.categoryName,
                         department:$scope.categoryId,
                         isActive: $scope.categoryIsActive
                      };

                      var config = {
                          headers : {
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.post('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/categories', data, config)
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

           //get department
           $scope.getDepartment = function () {

                      var config = {
                          headers : {
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.get('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/departments', config)
                      .success(function (data, status, headers, config) {
                          $scope.getDepartmentList = data;
                          console.log("get departments",data);
                          console.log("getDepartmentList",$scope.getDepartmentList);
                      })
                      .error(function (data, status, header, config) {
                          $scope.ResponseDetails = "Data: " + data +
                              "<hr />status: " + status +
                              "<hr />headers: " + header +
                              "<hr />config: " + config;
                      });
                  };
                  $scope.getDepartment();
           //get category
           $scope.getCategory = function () {

                      var config = {
                          headers : {
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.get('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/categories', config)
                      .success(function (data, status, headers, config) {
                          $scope.getCategoriesList = data;
                          console.log("get Categories",data);
                          console.log("categoryName",$scope.categoryName);
                      })
                      .error(function (data, status, header, config) {
                          $scope.ResponseDetails = "Data: " + data +
                              "<hr />status: " + status +
                              "<hr />headers: " + header +
                              "<hr />config: " + config;
                      });
                  };

                  $scope.getCategory();

                  $scope.getCategoryName = function(categoryName){
                      console.log("categoryName",categoryName);
                      $scope.categoryName = categoryName;
                  }
                  $scope.getdepartmentId = function(deptName){
                      console.log("deptName",deptName);
                      $scope.deptName = deptName;
                  }
                  //Post product
                  $scope.postProduct = function () {
                            // use $.param jQuery function to serialize data from JSON
                            var subcat = "no subcat";
                             var data ={
                                name:$scope.productName,
                                description:$scope.productDescription,
                                dept:$scope.deptName,
                                cat:$scope.categoryName,
                                subCat:subcat,
                                 sku: "abcd12345",
                                brand: "abcd",
                                s1: $scope.productImageUrl1,
                                s2: $scope.productImageUrl2,
                                s3: $scope.productImageUrl3,
                                p1:$scope.productOffer,
                                p2: "abcd",
                                mainImageUrl:$scope.productImageUrl,
                                vendorID: 100,
                                quantity:$scope.productquantity,
                                listPrice:$scope.productlistPrice,
                                salePrice:$scope.productSalePrice,
                                isActive: $scope.productisActive
                             };

                             var config = {
                                 headers : {
                                     'Content-Type': 'application/json'
                                 }
                             }

                             $http.post('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/products', data, config)
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
             //get product
             $scope.getProduct = function () {

                        var config = {
                            headers : {
                                'Content-Type': 'application/json'
                            }
                        }

                        $http.get('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/products', config)
                        .success(function (data, status, headers, config) {
                            $scope.getProductList = data;
                            console.log("get products",data);

                        })
                        .error(function (data, status, header, config) {
                            $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                        });
                    };
                    $scope.getProduct();
                    //get TodaysDeals
                    $scope.getTodaysDeal = function () {

                               var config = {
                                   headers : {
                                       'Content-Type': 'application/json'
                                   }
                               }

                               $http.get('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/todaysDeal', config)
                               .success(function (data, status, headers, config) {
                                   $scope.getTodayDealsList = data;
                                   console.log("get getTodayDealsList",data);

                               })
                               .error(function (data, status, header, config) {
                                   $scope.ResponseDetails = "Data: " + data +
                                       "<hr />status: " + status +
                                       "<hr />headers: " + header +
                                       "<hr />config: " + config;
                               });
                           };
                           $scope.getTodaysDeal();
            //post todays deal api
            $scope.postTodayDeals = function () {
                      // use $.param jQuery function to serialize data from JSON
                       var data ={
                          fromDate:$scope.fromDate,
                          toDate:$scope.toDate,
                          toTime: $scope.toTime,
                          fromTime: $scope.fromTime,
                          product: $scope.productid
                       };

                       var config = {
                           headers : {
                               'Content-Type': 'application/json'
                           }
                       }

                       $http.post('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/todaysDeal', data, config)
                       .success(function (data, status, headers, config) {
                           $scope.todayDealsPost = data;
                           console.log("dataa",data);
                       })
                       .error(function (data, status, header, config) {
                           $scope.ResponseDetails = "Data: " + data +
                               "<hr />status: " + status +
                               "<hr />headers: " + header +
                               "<hr />config: " + config;
                       });
                   };
                   $scope.getproductId = function(productName){
                       console.log(productName);
                       for (var i = 0; i < $scope.getProductList.length; i++) {
                           if (productName === $scope.getProductList[i].name) {
                               $scope.productid = $scope.getProductList[i]._id;
                           }

                       }
                       console.log( $scope.productid);
                   }
                   //edit aand delete category
                   $scope.editCategory = function(id,name,departmentId,IsActive){
                       console.log(id,name,departmentId,IsActive);
                       $scope.categoryName = name;
                       $scope.categoryId = departmentId;
                       $scope.categoryIsActive = IsActive;
                       //show category Edit button
                       $scope.showCategoryButton = true;
                   }
                   $scope.deleteCategory = function(catId){
                       console.log("catId",catId);
                   }
                   //edit and delete product
                   $scope.editProduct = function(id){

                       for (var i = 0; i < $scope.getProductList.length; i++) {
                         if ($scope.getProductList[i]._id === id) {
                           $scope.productName = $scope.getProductList[i].name;
                           $scope.productDescription = $scope.getProductList[i].description;
                           $scope.departmentSelected = $scope.getProductList[i].dept;
                           $scope.categorySelected = $scope.getProductList[i].cat;
                           $scope.productOffer = $scope.getProductList[i].p1;
                           $scope.productImageUrl = $scope.getProductList[i].mainImageUrl;
                           $scope.productImageUrl1 = $scope.getProductList[i].s1;
                           $scope.productImageUrl2 = $scope.getProductList[i].s2;
                           $scope.productImageUrl3 = $scope.getProductList[i].s3;
                           $scope.productquantity = $scope.getProductList[i].quantity;
                           $scope.productlistPrice = $scope.getProductList[i].listPrice;
                           $scope.productSalePrice = $scope.getProductList[i].salePrice;

                         }
                       }

                   }
                   $scope.deleteProduct = function(productId){
                       console.log("productId",productId);
                   }
                   //edit and delete todaysDeal
                   $scope.editTodayDeals = function(id,fromDate,fromTime,toDate,toTime,productId){
                       console.log(id,fromDate,fromTime,toDate,toTime,productId);
                    //    $scope.categoryName = name;
                    //    $scope.categoryId = departmentId;
                    //    $scope.categoryIsActive = IsActive;
                    //    //show category Edit button
                    //    $scope.showCategoryButton = true;
                   }
                   $scope.deleteTodayDeals = function(dealId){
                       console.log("dealId",dealId);
                   }

}
