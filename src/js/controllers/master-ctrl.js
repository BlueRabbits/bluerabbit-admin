/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore','$http','$location','$state','$stateParams','$filter', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http, $route ,$location, $state, $stateParams, $filter) {
  $scope.showToastMessage = false;
  $scope.adminName = $cookieStore.get('adminName');
  console.log("$cookieStore.get('AdminToken')",$cookieStore.get('AdminToken'));
      if ($cookieStore.get('AdminToken')) {
        $scope.showDashboard = true;

      } else {
        $scope.showDashboard = false;
      }
      //allow two logins
      if ($cookieStore.get('adminName') === 'superadmin') {
        $scope.showOrderManagement = true;
        $scope.orderHeight = '0px';
        $scope.orderColor = '#2d3e63';
      } else {
        $scope.showOrderManagement = false;
      }


      // if (window.location.hash == '#/category') {
      //   $scope.myObj = {
      //        "color" : "white",
      //        "border-left": "3px solid #e99d1a",
      //        "text-indent": "22px",
      //         "background": "#2d3e63"
      //
      //    }
      // }
      // if (window.location.hash == '#/addProduct') {
      //   $scope.myObj1 = {
      //        "color" : "white",
      //        "border-left": "3px solid #e99d1a",
      //        "text-indent": "22px",
      //         "background": "#2d3e63"
      //
      //    }
      //    $scope.myObj ="";
      //    $scope.myObj2 ="";
      // }
    $scope.categoryHighlight =function(){
      $scope.activeCat ='active';
      $scope.activeProd ='false';
      // if (window.location.hash == '#/category') {
      $scope.myObjProd = {};
      $scope.myUpdateOrder = {};
      $scope.myObjBanner = {};
        $scope.myObj = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
      //  }
    }
    $scope.productHighlight =function(){
      $scope.activeProd ='active';
      $scope.activeCat ='false';
      $scope.myObj = {};
      $scope.myUpdateOrder = {};
      $scope.myObjBanner = {};
      // if (window.location.hash == '#/addProduct') {
        $scope.myObjProd = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
      //  }
    }
    $scope.bannerHighlight =function(){
      $scope.activeProd ='false';
      $scope.activeCat ='false';
      $scope.activeBanner = 'active';
      $scope.myObj = {};
      $scope.myObjProd = {};
      $scope.myUpdateOrder = {};
        $scope.myObjBanner = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
    }
    $scope.updateCategoryHighlight =function(){
      $scope.activeProd ='false';
      $scope.activeCat ='false';
      $scope.activeBanner = 'false';
      $scope.activeUpdateCat = 'active';
      $scope.myObj = {};
      $scope.myObjProd = {};
      $scope.myObjBanner = {};
      $scope.myUpdateBan = {};
      $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateCat = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
    }
    $scope.updateProductHighlight =function(){
      $scope.activeProd ='false';
      $scope.activeCat ='false';
      $scope.activeBanner = 'false';
      $scope.activeUpdateCat = 'false';
      $scope.activeUpdateProd = 'active';
      $scope.myObj = {};
      $scope.myObjProd = {};
      $scope.myObjBanner = {};
      $scope.myUpdateCat = {};
      $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
    }
    $scope.updateBannerHighlight =function(){
      $scope.activeProd ='false';
      $scope.activeCat ='false';
      $scope.activeBanner = 'false';
      $scope.activeUpdateCat = 'false';
      $scope.activeUpdateProd = 'false';
      $scope.activeUpdateBan = 'active';
      $scope.activeUpdateOrder = 'false';
      $scope.myObj = {};
      $scope.myObjProd = {};
      $scope.myObjBanner = {};
      $scope.myUpdateCat = {};
      $scope.myUpdateProd = {};
      $scope.myUpdateOrder = {};
        $scope.myUpdateBan = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
    }
    $scope.updateOrderHighlight =function(){
      $scope.activeProd ='false';
      $scope.activeCat ='false';
      $scope.activeBanner = 'false';
      $scope.activeUpdateCat = 'false';
      $scope.activeUpdateProd = 'false';
      $scope.activeUpdateBan = 'false';
      $scope.activeUpdateUser = 'false';
      $scope.activeUpdateOrder = 'active';
      $scope.myObj = {};
      $scope.myObjProd = {};
      $scope.myObjBanner = {};
      $scope.myUpdateCat = {};
      $scope.myUpdateProd = {};
      $scope.myUpdateBan = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateOrder = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
    }
    $scope.updateUserHighlight =function(){
      $scope.activeProd ='false';
      $scope.activeCat ='false';
      $scope.activeBanner = 'false';
      $scope.activeUpdateCat = 'false';
      $scope.activeUpdateProd = 'false';
      $scope.activeUpdateBan = 'false';
      $scope.activeUpdateOrder = 'false';
      $scope.activeUpdateUser = 'active';
      $scope.myObj = {};
      $scope.myObjProd = {};
      $scope.myObjBanner = {};
      $scope.myUpdateCat = {};
      $scope.myUpdateProd = {};
      $scope.myUpdateBan = {};
      $scope.myUpdateOrder = {};
        $scope.myUpdateUser = {
             "color" : "white",
             "border-left": "3px solid #e99d1a",
             "text-indent": "22px",
              "background": "#2d3e63"

         }
    }
      console.log("$state.current.name",window.location.hash);
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
    //var BASE_URL = "http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000";
    //var BASE_URL = "http://ec2-54-187-15-116.us-west-2.compute.amazonaws.com:9000";
    var BASE_URL = "http://ec2-35-164-239-44.us-west-2.compute.amazonaws.com:9000";
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
                   $cookieStore.put("adminName", data.name);
                   $cookieStore.put("adminEmailId", $scope.email);
                   $cookieStore.put('AdminloggedIn', true);


                   location.reload(true);

                  //  window.location.href = '#/category';
                   if ($cookieStore.get('adminName') === 'superadmin') {

                      window.location.href = '#/orderManagement';
                   }
                   if ($cookieStore.get('adminName') === 'admin') {

                      window.location.href = '#/overView';
                   }


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
                         department:1,
                         isActive: true
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
                                discountedPrice: $scope.discountedPrice,
                                instock:$scope.instock,
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
                                 $scope.updateAutocomplete();


                             })
                             .error(function (data, status, header, config) {
                                 $scope.ResponseDetails = "Data: " + data +
                                     "<hr />status: " + status +
                                     "<hr />headers: " + header +
                                     "<hr />config: " + config;
                             });
                         };
              //post autocomplete after product is Added
              $scope.updateAutocomplete = function(){
                  var data = {}
                  var config = {
                      headers : {
                          'Authorization': 'Bearer '+AdminToken,
                          'Content-Type': 'application/json'
                      }
                  }

                  $http.post(BASE_URL + '/api/products/updateAutoComplete', data, config)
                  .success(function (data, status, headers, config) {
                      $scope.updateAutocomplete = data;
                      console.log("updateAutocomplete",data);


                  })
                  .error(function (data, status, header, config) {
                      $scope.ResponseDetails = "Data: " + data +
                          "<hr />status: " + status +
                          "<hr />headers: " + header +
                          "<hr />config: " + config;
                  });
              }

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
                          department:1,
                          isActive: true
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
                           $scope.discountedPrice = $scope.getProductList[i].discountedPrice;
                           $scope.instock = $scope.getProductList[i].instock;
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
                           discountedPrice: $scope.discountedPrice,
                           instock:$scope.instock,
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
                   $scope.cancelProduct = function(){
                     $scope.productName = "";
                     $scope.productDescription= "";
                     $scope.departmentSelected= "";
                     $scope.categorySelected= "";
                     $scope.productImageUrl1= "";
                     $scope.productImageUrl2= "";
                     $scope.productImageUrl3= "";
                     $scope.productOffer= "";
                    $scope.productImageUrl= "";
                    $scope.productquantity= "";
                    $scope.productlistPrice= "";
                    $scope.productSalePrice= "";
                     $scope.discountedPrice= "";
                     $scope.instock= "";
                     $scope.productisActive= "";
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
                   //get all orders

                   $scope.getAllOrders = function () {

                              var config = {
                                  headers : {
                                      'Authorization': 'Bearer '+AdminToken,
                                      'Content-Type': 'application/json'
                                  }
                              }

                              $http.get(BASE_URL + '/api/orders', config)
                              .success(function (data, status, headers, config) {
                                  $scope.getAllOrdersList = data;
                                  $scope.getAllOrdersListLength = data.length;
                                  console.log("get getAllOrdersList",data);

                              })
                              .error(function (data, status, header, config) {
                                  $scope.ResponseDetails = "Data: " + data +
                                      "<hr />status: " + status +
                                      "<hr />headers: " + header +
                                      "<hr />config: " + config;
                              });
                          };
                          $scope.getAllOrders();

                          //get all order status
                          $scope.getAllOrderStatus = function () {

                                     var config = {
                                         headers : {
                                             'Authorization': 'Bearer '+AdminToken,
                                             'Content-Type': 'application/json'
                                         }
                                     }

                                     $http.get(BASE_URL + '/api/orderStatus', config)
                                     .success(function (data, status, headers, config) {
                                         $scope.getAllOrdersStatusList = data;
                                         console.log("get getAllOrdersStatusList",data);


                                     })
                                     .error(function (data, status, header, config) {
                                         $scope.ResponseDetails = "Data: " + data +
                                             "<hr />status: " + status +
                                             "<hr />headers: " + header +
                                             "<hr />config: " + config;
                                     });
                                 };
                                 $scope.getAllOrderStatus();
                                 //get order status changed value
                                 $scope.orderStatusChangedValue = function(id){
                                   console.log("orderStatusname",id);
                                   $scope.selectedOrderStatusId = id;
                                   for (var i = 0; i < $scope.getAllOrdersStatusList.length; i++) {
                                     if ($scope.getAllOrdersStatusList[i]._id ==  id) {
                                        $scope.orderStatusObj = $scope.getAllOrdersStatusList[i];
                                     }
                                   }


                                 }


                                 //edit order staus by order id

                                 $scope.editOrderStatus = function(order_id){



                                     var data ={

                                         "orderStatus": $scope.orderStatusObj

                                    };

                                     var config = {
                                         headers : {
                                             'Authorization': 'Bearer '+AdminToken,
                                             'Content-Type': 'application/json'
                                         }
                                     }

                                     $http.put(BASE_URL + '/api/orders/'+order_id, data, config)
                                     .success(function (data, status, headers, config) {
                                         $scope.updateCategory = data;
                                         console.log("updateCategory",data);
                                         $scope.getAllOrders();
                                         alert("Updated orders");

                                     })
                                     .error(function (data, status, header, config) {
                                         $scope.ResponseDetails = "Data: " + data +
                                             "<hr />status: " + status +
                                             "<hr />headers: " + header +
                                             "<hr />config: " + config;
                                     });
                                 }
                                 //invoice modal window
                                 $scope.invoiceDetails = function(order_id){
                                   console.log(order_id);
                                   var config = {
                                       headers : {
                                           'Authorization': 'Bearer '+AdminToken,
                                           'Content-Type': 'application/json'
                                       }
                                   }

                                   $http.get(BASE_URL + '/api/orders/'+order_id, config)
                                   .success(function (data, status, headers, config) {
                                       $scope.getByorderId = data;
                                       console.log("$scope.getByorderId",$scope.getByorderId);

                                   })
                                   .error(function (data, status, header, config) {
                                       $scope.ResponseDetails = "Data: " + data +
                                           "<hr />status: " + status +
                                           "<hr />headers: " + header +
                                           "<hr />config: " + config;
                                   });
                                 }
                                 //print invoive
                                 $scope.printInvoice = function(){
                                   var contents = $('#printArea').html();
                                        var frame = $('#printframe')[0].contentWindow.document;
                                        var originalContents = document.body.html;
                                        // show the modal div
                                        $('#invoiceModal').css({'display':'block'});

                                        // open the frame document and add the contents
                                        frame.open();
                                        frame.write('<!DOCTYPE html><html><head><title>Customer copy of bill</title>'
                                                                  +'<link rel="stylesheet" >'
                                                                  +'</head><body><div>'
                                                                  +'<table class="table table-condensed">'
                                                                  + contents + '</table></div></html>');
                                        frame.close();

                                        // print just the modal div
                                        $('#printframe')[0].contentWindow.print();
                                         document.body.html = originalContents;

                                 }
                                 //export to excel
                                 $scope.exportToExcel = function(){
                                   window.open('data:application/vnd.ms-excel,' + $('#orderDetailExport').html());

                                 }

                                 //date filter
                                 $scope.filterBydate = function(toDate){
                                   console.log("toDate",toDate);
                                   var todayDate = new Date(toDate).toString().split(" ").slice(0, 4).join(" ");
                                  console.log("todayDate",todayDate);
                                  //  var now = new Date();
                                  //  var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
                                  //  isoDate = new Date(toDate).toISOString();
                                  //  console.log("isoDate",isoDate);
                                  //  $scope.utcdateFilter = isoDate;
                                   //date from api utc to local date
                                   for (var i = 0; i < $scope.getAllOrdersList.length; i++) {
                                     $scope.ordatesList = $scope.getAllOrdersList[i].orderDate;
                                     console.log("$scope.ordatesList",$scope.ordatesList);
                                     var date = new Date($scope.ordatesList );
                                     date.toString();

                                     var orderListdate1 = new Date($scope.ordatesList).toString().split(" ").slice(0, 4).join(" ");

                                     console.log("ordatesList",orderListdate1);
                                     // IDEA:
                                     if (todayDate == orderListdate1) {
                                       $scope.dateList = $scope.ordatesList;
                                       console.log("$scope.dateList",$scope.ordatesList);
                                     }
                                   }
                                  //  console.log("$scope.ordatesList",$scope.ordatesList);
                                  //  var date = new Date($scope.ordatesList );
                                  //  date.toString();
                                   //
                                  //  var orderListdate1 = new Date($scope.ordatesList).toString().split(" ").slice(0, 4).join(" ");
                                   //
                                  //  console.log("ordatesList",orderListdate1);
                                  //  // IDEA:
                                  //  if (todayDate == orderListdate1) {
                                  //    $scope.dateList = $scope.ordatesList;
                                  //    console.log("$scope.dateList",$scope.ordatesList);
                                  //  }

                                  //  $scope.toDateFilter = toDate;
                                 }
                                 //show all orders
                                 $scope.showAllOrders = function(){
                                   $scope.dateList = "";
                                 }
                                 //get all users
                                 $scope.getAllUsers = function(){
                                   var config = {
                                       headers : {

                                           'Content-Type': 'application/json'
                                       }
                                   }

                                   $http.get(BASE_URL + '/api/users', config)
                                   .success(function (data, status, headers, config) {
                                       $scope.getAllUserList = data;
                                       $scope.allusersLength = data.length;
                                       console.log("get getAllUserList",data.length);


                                   })
                                   .error(function (data, status, header, config) {
                                       $scope.ResponseDetails = "Data: " + data +
                                           "<hr />status: " + status +
                                           "<hr />headers: " + header +
                                           "<hr />config: " + config;
                                   });
                                 }
                                  $scope.getAllUsers();
                                  //Update users activate
                                  // $scope.userActiveChange = function(name){
                                  //   console.log("name",name);
                                  //   console.log("isActiveSelected",$scope.isActiveSelected);
                                  // }
                                  $scope.updateUser = function(userid,sel){
                                    console.log("sel",$scope.sel);
                                    $scope.selectedValue = $('#sel11 :selected').val();
                                    var config = {
                                        headers : {

                                            'Content-Type': 'application/json'
                                        }
                                    }

                                    var data ={

                                        "isactive": sel

                                   };

                                    $http.put(BASE_URL + '/api/users/'+userid,data, config)
                                    .success(function (data, status, headers, config) {
                                        $scope.getIsActiveUpdated = data;
                                        console.log("get getAllUserList",data);
                                        $scope.getAllUsers();

                                    })
                                    .error(function (data, status, header, config) {
                                        $scope.ResponseDetails = "Data: " + data +
                                            "<hr />status: " + status +
                                            "<hr />headers: " + header +
                                            "<hr />config: " + config;
                                    });
                                  }
                                  //get all feedbacks
                                  $scope.getAllFeedbacks = function(){
                                    var config = {
                                        headers : {

                                            'Content-Type': 'application/json',
                                            'Authorization': 'Bearer '+AdminToken
                                        }
                                    }

                                    $http.get(BASE_URL + '/api/order/feedback', config)
                                    .success(function (data, status, headers, config) {
                                        $scope.getAllFeedbacks = data;
                                        $scope.getAllFeedbacksLength = data.length;
                                        console.log("get getAllFeedbacks",data);


                                    })
                                    .error(function (data, status, header, config) {
                                        $scope.ResponseDetails = "Data: " + data +
                                            "<hr />status: " + status +
                                            "<hr />headers: " + header +
                                            "<hr />config: " + config;
                                    });
                                  }
                                   $scope.getAllFeedbacks();

}
