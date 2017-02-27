/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore','$http','$location','$state','$stateParams', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http, $route ,$location, $state, $stateParams) {
  $scope.showToastMessage = false;
      if ($cookieStore.get('AdminToken')) {
        $scope.showDashboard = true;

      } else {
        $scope.showDashboard = false;
      }
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
    var BASE_URL = "http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000";
    //var BASE_URL = "http://ec2-54-187-15-116.us-west-2.compute.amazonaws.com:9000";
    //var BASE_URL = "http://localhost:9000";
    //var BASE_URL = "http://192.168.0.84:9000";

    var AdminToken = $cookieStore.get('AdminToken');
    //login
    $scope.loginAdmin = function () {
      $scope.showDashboard = true;
              // use $.param jQuery function to serialize data from JSON
               var data ={
                   email: $scope.email,
                   password: $scope.password
               };

               var config = {
                   headers : {
                       'Content-Type': 'application/json'
                   }
               }

               $http.post(BASE_URL + '/auth/local', data, config)
               .success(function (data, status, headers, config) {
                   $scope.loginData = data;
                   console.log("loginData",data);
                  //  window.location.reload(true);
                   //cookieStore
                   $cookieStore.put("AdminToken", data.token);
                   $cookieStore.put("adminId", data._id);
                   $cookieStore.put("adminEmailId", $scope.email);
                   $cookieStore.put('AdminloggedIn', true);


                   location.reload(true);
                   window.location.href = '#/updateCategory';

               })
               .error(function (data, status, header, config) {
                  $scope.erroralert = true;
                   $scope.errorMessage = data.message;
                   $scope.ResponseDetails = "Data: " + data +
                       "<hr />status: " + status +
                       "<hr />headers: " + header +
                       "<hr />config: " + config;
               });
           };
           //logout

  $scope.logout = function () {

    $cookieStore.remove("adminId");
    $cookieStore.remove("AdminToken");
    $cookieStore.remove("adminEmailId");
    $cookieStore.put('AdminloggedIn', false);
    location.reload(true);
    window.location.href = '#/login';

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
                       'Authorization': 'Bearer '+AdminToken,
                       'Content-Type': 'application/json'
                   }
               }

               $http.post(BASE_URL + '/api/departments', data, config)
               .success(function (data, status, headers, config) {
                   $scope.PostDataResponse = data;
                   console.log("dataa",data);
                   alert("Department  added");
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
                              'Authorization': 'Bearer '+AdminToken,
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.post(BASE_URL + '/api/categories', data, config)
                      .success(function (data, status, headers, config) {
                          $scope.PostDataResponse = data;
                          console.log("dataa",data);
                          alert("New Category Added!!");
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
                              'Authorization': 'Bearer '+AdminToken,
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.get(BASE_URL + '/api/departments', config)
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
                              'Authorization': 'Bearer '+AdminToken,
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.get(BASE_URL + '/api/categories', config)
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
                                     'Authorization': 'Bearer '+AdminToken,
                                     'Content-Type': 'application/json'
                                 }
                             }

                             $http.post(BASE_URL + '/api/products', data, config)
                             .success(function (data, status, headers, config) {
                                 $scope.PostDataResponse = data;
                                 console.log("dataa",data);
                                 alert("New Product Added");
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
                                'Authorization': 'Bearer '+AdminToken,
                                'Content-Type': 'application/json'
                            }
                        }

                        $http.get(BASE_URL + '/api/products', config)
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
                                       'Authorization': 'Bearer '+AdminToken,
                                       'Content-Type': 'application/json'
                                   }
                               }

                               $http.get(BASE_URL + '/api/todaysDeal', config)
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
                               'Authorization': 'Bearer '+AdminToken,
                               'Content-Type': 'application/json'
                           }
                       }

                       $http.post(BASE_URL + '/api/todaysDeal', data, config)
                       .success(function (data, status, headers, config) {
                           $scope.todayDealsPost = data;
                           console.log("dataa",data);
                           alert("Product added to Todays Deal");
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
                       $scope.cat_Id = id;
                       $scope.categoryName = name;
                       $scope.categoryId = departmentId;
                       $scope.categoryIsActive = IsActive;
                       //show category Edit button
                       $scope.showCategoryButton = true;
                   }
                   $scope.updateCategory = function(){
                       //show category Edit button
                       $scope.showCategoryButton = true;
                       var data ={
                          name:$scope.categoryName,
                          department:$scope.categoryId,
                          isActive: $scope.categoryIsActive
                       };

                       var config = {
                           headers : {
                               'Authorization': 'Bearer '+AdminToken,
                               'Content-Type': 'application/json'
                           }
                       }

                       $http.put(BASE_URL + '/api/categories/'+$scope.cat_Id, data, config)
                       .success(function (data, status, headers, config) {
                           $scope.updateCategory = data;
                           console.log("updateCategory",data);
                           $scope.getCategory();
                           location.reload(true);
                           alert("Updated Category");

                       })
                       .error(function (data, status, header, config) {
                           $scope.ResponseDetails = "Data: " + data +
                               "<hr />status: " + status +
                               "<hr />headers: " + header +
                               "<hr />config: " + config;
                       });
                   }
                   $scope.deleteCategory = function(catId){
                       console.log("catId",catId);
                       var config = {
                           headers : {
                               'Authorization': 'Bearer '+AdminToken,
                               'Content-Type': 'application/json'
                           }
                       }
                       $http.delete(BASE_URL + '/api/categories/'+catId, config)
                       .success(function (data, status, headers, config) {
                           console.log("delete category",data);
                            $scope.getCategory();
                            alert("Deleted category");
                       })
                       .error(function (data, status, header, config) {
                           $scope.ResponseDetails = "Data: " + data +
                               "<hr />status: " + status +
                               "<hr />headers: " + header +
                               "<hr />config: " + config;
                       });
                   }
                   //edit and delete product
                   $scope.editProduct = function(id){
                     $scope.showProductButton = true;
                       $scope.productId=id;
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
                           $scope.productisActive = $scope.getProductList[i].isActive;

                         }
                       }

                   }
                   //update product api
                   $scope.updateProduct = function(){
                       var subcat = "no subcat";
                        var data ={
                           name:$scope.productName,
                           description:$scope.productDescription,
                           dept:$scope.departmentSelected,
                           cat:$scope.categorySelected,
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
                                'Authorization': 'Bearer '+AdminToken,
                                'Content-Type': 'application/json'
                            }
                        }

                        $http.put(BASE_URL + '/api/products/'+$scope.productId, data, config)
                        .success(function (data, status, headers, config) {
                            $scope.updateProd = data;
                            console.log("updateProduct",data);
                            $scope.getProduct();
                            // $scope.showToastMessage = true;
                            alert("Updated Product");
                            //location.reload(true);
                        })
                        .error(function (data, status, header, config) {
                            $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                        });
                   }
                   $scope.deleteProduct = function(productId){
                       console.log("productId",productId);
                       var config = {
                           headers : {
                               'Authorization': 'Bearer '+AdminToken,
                               'Content-Type': 'application/json'
                           }
                       }
                       $http.delete(BASE_URL + '/api/products/'+productId, config)
                       .success(function (data, status, headers, config) {
                           console.log("delete product",data);
                            $scope.getProduct();
                            alert("Product Deleted");
                       })
                       .error(function (data, status, header, config) {
                           $scope.ResponseDetails = "Data: " + data +
                               "<hr />status: " + status +
                               "<hr />headers: " + header +
                               "<hr />config: " + config;
                       });
                   }
                   //edit and delete todaysDeal
                   $scope.editTodayDeals = function(id){
                       console.log(id);
                       for (var i = 0; i < $scope.getTodayDealsList.length; i++) {
                           if ($scope.getTodayDealsList[i]._id === id) {
                               $scope.fromDate = $scope.getTodayDealsList[i].fromDate;
                           }
                       }

                   }
                   $scope.deleteTodayDeals = function(dealId){
                       console.log("dealId",dealId);
                       var config = {
                           headers : {
                               'Authorization': 'Bearer '+AdminToken,
                               'Content-Type': 'application/json'
                           }
                       }
                       $http.delete(BASE_URL + '/api/todaysDeal/'+dealId, config)
                       .success(function (data, status, headers, config) {
                           console.log("delete product",data);
                            $scope.getTodaysDeal();
                            alert("Deleted Todays Deal")
                       })
                       .error(function (data, status, header, config) {
                           $scope.ResponseDetails = "Data: " + data +
                               "<hr />status: " + status +
                               "<hr />headers: " + header +
                               "<hr />config: " + config;
                       });
                   }

}
