/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$http', '$location', '$state', '$stateParams', '$filter', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http, $route, $location, $state, $stateParams, $filter) {
    $scope.showToastMessage = false;
    $scope.adminName = $cookieStore.get('adminName');
    //console.log("$cookieStore.get('AdminToken')", $cookieStore.get('AdminToken'));
    if (!$cookieStore.get("AdminToken") ) {
      // no logged user, we should be going to #login
      window.location.href = '#/login';
      $scope.showDashboard = false;
    }

    if ($cookieStore.get("AdminloggedIn") === false) {

        location.href = '#/login';
        $scope.showDashboard = false;
        $scope.hideDashboard = true;

    }
    if ($cookieStore.get("AdminloggedIn") === true) {
        $scope.showDashboard = true;
        $scope.hideLoginPage = true;
    }
    var currentLocation = window.location;
    console.log("currentLocation",currentLocation.hash);


    if ($cookieStore.get('AdminToken')) {
        $scope.showDashboard = true;
    //    window.location.href = '#/orderManagement';

    } else {
        $scope.showDashboard = false;
        $cookieStore.remove("adminId");
        $cookieStore.remove("AdminToken");
        $cookieStore.remove("adminEmailId");
        $cookieStore.put('AdminloggedIn', false);
        window.location.href = '#/login';
    }
    //allow two logins
    if ($cookieStore.get('adminName') === 'Admin') {
        $scope.showOrderManagement = true;
        $scope.orderHeight = '0px';
        $scope.orderColor = '#2d3e63';
        $scope.marginHeight = {
            "margin-top": "-50px"
        }

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

    if (window.location.hash == '#/overView') {
        $scope.myObjProd = {};
        $scope.myUpdateOrder = {};
        $scope.myObjBanner = {};
        $scope.myObj = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateProd = {};
        $scope.myoverViewObj = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }

    $scope.dashHighlight = function() {
        $scope.activeDash = 'active';
        $scope.activeCat = 'false';
        $scope.activeProd = 'false';
        // if (window.location.hash == '#/category') {
        $scope.myObjProd = {};
        $scope.myUpdateOrder = {};
        $scope.myObjBanner = {};
        $scope.myObj = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateProd = {};
        $scope.myoverViewObj = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
        //  }
    }

    $scope.categoryHighlight = function() {
        $scope.activeCat = 'active';
        $scope.activeProd = 'false';
        // if (window.location.hash == '#/category') {
        $scope.myObjProd = {};
        $scope.myUpdateOrder = {};
        $scope.myObjBanner = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateLoc ={};
        $scope.myUpdateScoutLoc = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateCat = {};

        $scope.myObj = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
        //  }
    }
    $scope.productHighlight = function() {
        $scope.activeProd = 'active';
        $scope.activeCat = 'false';
        $scope.myObj = {};
        $scope.myUpdateOrder = {};
        $scope.myObjBanner = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateLoc ={};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateCat = {};

        // if (window.location.hash == '#/addProduct') {
        $scope.myObjProd = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
        //  }
    }
    $scope.bannerHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'active';
        $scope.myObj = {};
        $scope.myObjProd = {};
        $scope.myUpdateOrder = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateCat = {};
        $scope.myObjBanner = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.updateCategoryHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'active';
        $scope.myObj = {};
        $scope.myoverViewObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateUser = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateCat = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.updateProductHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'false';
        $scope.activeUpdateProd = 'active';
        $scope.myObj = {};
        $scope.myoverViewObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateLoc ={};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateProd = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.updateBannerHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'false';
        $scope.activeUpdateProd = 'false';
        $scope.activeUpdateBan = 'active';
        $scope.activeUpdateOrder = 'false';
        $scope.myObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myUpdateCat = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateBan = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.updateOrderHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'false';
        $scope.activeUpdateProd = 'false';
        $scope.activeUpdateBan = 'false';
        $scope.activeUpdateUser = 'false';
        $scope.activeUpdateOrder = 'active';
        $scope.myObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateLoc = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateOrder = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.updateUserHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'false';
        $scope.activeUpdateProd = 'false';
        $scope.activeUpdateBan = 'false';
        $scope.activeUpdateOrder = 'false';
        $scope.activeUpdateUser = 'active';
        $scope.myObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateLoc = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateUser = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.locationHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'false';
        $scope.activeUpdateProd = 'false';
        $scope.activeUpdateBan = 'false';
        $scope.activeUpdateOrder = 'false';
        $scope.activeUpdateUser = 'false';
        $scope.activeUpdateLoc = 'active';
        $scope.myObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {};
        $scope.myUpdateLoc = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.ScoutlocationHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'false';
        $scope.activeUpdateProd = 'false';
        $scope.activeUpdateBan = 'false';
        $scope.activeUpdateOrder = 'false';
        $scope.activeUpdateUser = 'false';
        $scope.activeUpdateLoc = 'false';
        $scope.activeUpdateScoutLoc = 'active';
        $scope.myObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateLoc ={};
        $scope.myUpdateShipping = {};
        $scope.myUpdateScoutLoc = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }
    $scope.updateShippingHighlight = function() {
        $scope.activeProd = 'false';
        $scope.activeCat = 'false';
        $scope.activeBanner = 'false';
        $scope.activeUpdateCat = 'false';
        $scope.activeUpdateProd = 'false';
        $scope.activeUpdateBan = 'false';
        $scope.activeUpdateOrder = 'false';
        $scope.activeUpdateUser = 'false';
        $scope.activeUpdateLoc = 'false';
        $scope.activeUpdateScoutLoc = 'false';
        $scope.activeUpdateShipping = 'active';
        $scope.myObj = {};
        $scope.myObjProd = {};
        $scope.myObjBanner = {};
        $scope.myoverViewObj = {};
        $scope.myUpdateCat = {};
        $scope.myUpdateProd = {};
        $scope.myUpdateBan = {};
        $scope.myUpdateOrder = {};
        $scope.myUpdateUser = {};
        $scope.myUpdateLoc ={};
        $scope.myUpdateScoutLoc = {};
        $scope.myUpdateShipping = {
            "color": "white",
            "border-left": "3px solid #e99d1a",
            "text-indent": "22px",
            "background": "#2d3e63"

        }
    }

    $scope.liveOrders = {
        "cursor": "default",
        "background-color": "#fff",
        "border": "1px solid #ddd",
        "border-bottom-color": "transparent"
    }

    $scope.pastOrders = function(){
        $scope.liveOrders = {};

    }

    $scope.acceptedOrders = function(){
      $scope.liveOrders = {};
      $scope.pastOrders= {};
    }
    $scope.outfordeliveryOrders = function(){
      $scope.liveOrders = {};
      $scope.pastOrders= {};
    }
    $scope.completedOrders = function(){
      $scope.liveOrders = {};
      $scope.pastOrders= {};
    }
    $scope.cancelledOrders = function(){
      $scope.liveOrders = {};
      $scope.pastOrders= {};
    }

    console.log("$state.current.name", window.location.hash);
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
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
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
    //var BASE_URL = "http://ec2-35-164-239-44.us-west-2.compute.amazonaws.com:9000";
    //var BASE_URL = "http://35.161.215.52:9000";
    var BASE_URL = "http://34.206.42.77:9000";
    //var BASE_URL = "http://localhost:9000";
    //var BASE_URL = "http://192.168.0.84:9000";

    var AdminToken = $cookieStore.get('AdminToken');
    //login
    $scope.loginAdmin = function() {
        $scope.showDashboard = true;
        // use $.param jQuery function to serialize data from JSON
        var data = {
            email: $scope.email,
            password: $scope.password
        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        $http.post(BASE_URL + '/auth/local', data, config)
            .success(function(data, status, headers, config) {
                $scope.loginData = data;
                console.log("loginData", data);
                //  window.location.reload(true);
                //cookieStore
                $cookieStore.put("AdminToken", data.token);
                $cookieStore.put("adminId", data._id);
                $cookieStore.put("adminName", data.name);
                $cookieStore.put("adminEmailId", $scope.email);
                $cookieStore.put('AdminloggedIn', true);


                location.reload(true);

                //  window.location.href = '#/category';
                if ($cookieStore.get('adminName') === 'Admin') {

                    window.location.href = '#/orderManagement';
                }
                if ($cookieStore.get('adminName') === 'SuperAdmin') {

                    window.location.href = '#/overView';
                }


            })
            .error(function(data, status, header, config) {
                $scope.erroralert = true;
                $scope.errorMessage = data.message;
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    //logout

    $scope.logout = function() {

        //window.location.href = '#/login';
        location.reload(true);
        $cookieStore.remove("adminId");
        $cookieStore.remove("AdminToken");
        $cookieStore.remove("adminEmailId");
        $cookieStore.remove("adminName");
        $cookieStore.put('AdminloggedIn', false);
        $scope.showDashboard = false;
        //window.location.href = '#/login';
          $location.path('/login');
        $window.location.reload();
        location.reload();
    };

    //Post Departments
    $scope.postDepartment = function() {
        // use $.param jQuery function to serialize data from JSON
        var data = {
            name: $scope.departmentName,
            description: $scope.descriptionOfDepartment,
            isActive: $scope.departmentIsActive
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.post(BASE_URL + '/api/departments', data, config)
            .success(function(data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("dataa", data);
                alert("Department  added");
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    //Post category
    $scope.postCategory = function() {
        // use $.param jQuery function to serialize data from JSON
        var data = {
            name: $scope.categoryName,
            department: 1,
            isActive: true
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.post(BASE_URL + '/api/categories', data, config)
            .success(function(data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("dataa", data);
                window.location.reload(true);
                alert("New Category Added!!");
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

    //get department
    $scope.getDepartment = function() {

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/departments', config)
            .success(function(data, status, headers, config) {
                $scope.getDepartmentList = data;
                console.log("get departments", data);
                console.log("getDepartmentList", $scope.getDepartmentList);
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    $scope.getDepartment();
    //get category
    $scope.getCategory = function() {

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/categories', config)
            .success(function(data, status, headers, config) {
                $scope.getCategoriesList = data;
                console.log("get Categories", data);
                console.log("categoryName", $scope.categoryName);
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
                    window.location.href = '#/login';
            });
    };

    $scope.getCategory();
    $scope.categorySelected = "Recommended";
    $scope.getCategoryName = function(categoryName) {
        console.log("categoryName", categoryName);
        $scope.categoryName = categoryName;
    }
    $scope.getdepartmentId = function(deptName) {
        console.log("deptName", deptName);
        $scope.deptName = deptName;
    }
    //Post product
    $scope.calcDiscount = function (){
        $scope.productSalePrice = Math.round($scope.productlistPrice - ($scope.productlistPrice * $scope.discountedPrice/100));
        console.log("$scope.productSalePrice",$scope.productSalePrice);
    }

    $scope.postProduct = function() {
        // use $.param jQuery function to serialize data from JSON
        var subcat = "no subcat";
        //$scope.productSalePrice = $scope.productlistPrice - ($scope.productlistPrice - $scope.discountedPrice/100);
        var data = {
            name: $scope.productName,
            description: $scope.productDescription,
            dept: "nonveg",
            cat: $scope.categoryName,
            subCat: subcat,
            sku: "abcd12345",
            brand: "abcd",
            s1: $scope.productImageUrl1,
            s2: $scope.productImageUrl2,
            s3: $scope.productImageUrl3,
            p1: $scope.productOffer,
            p2: "abcd",
            mainImageUrl: $scope.productImageUrl,
            vendorID: 100,
            quantity: $scope.productquantity,
            listPrice: $scope.productlistPrice,
            salePrice: $scope.productSalePrice,
            discountedPrice: $scope.discountedPrice,
            instock: $scope.instock,
            isActive: $scope.productisActive
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.post(BASE_URL + '/api/products', data, config)
            .success(function(data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("dataa", data);
                $scope.updateAutocomplete();
                window.location.reload(true);
                alert("New Product Added");



            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    //post autocomplete after product is Added
    $scope.updateAutocomplete = function() {
        var data = {}
        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.post(BASE_URL + '/api/products/updateAutoComplete', data, config)
            .success(function(data, status, headers, config) {
                $scope.updateAutocomplete = data;
                console.log("updateAutocomplete", data);


            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }

    //get product
    $scope.getProduct = function() {

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/products', config)
            .success(function(data, status, headers, config) {
                $scope.getProductList = data;
                console.log("get products", data);

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    $scope.getProduct();
    //get TodaysDeals
    $scope.getBanner = function() {

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/banner', config)
            .success(function(data, status, headers, config) {
                $scope.getBanner = data;
                console.log("get getBanner", data);

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    $scope.getBanner();
    //post todays deal api
    $scope.postBanner = function() {
        // use $.param jQuery function to serialize data from JSON
        var data = {
            banner_image: $scope.banner_image,
            name: $scope.banner_name,
            desc: $scope.banner_desc
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.post(BASE_URL + '/api/banner', data, config)
            .success(function(data, status, headers, config) {
                $scope.postBanner = data;
                console.log("dataa", data);
                window.location.reload(true);
                alert("Banner Created");
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    $scope.getproductId = function(productName) {
        console.log(productName);
        for (var i = 0; i < $scope.getProductList.length; i++) {
            if (productName === $scope.getProductList[i].name) {
                $scope.productid = $scope.getProductList[i]._id;
            }

        }
        console.log($scope.productid);
    }
    //edit aand delete category
    $scope.editCategory = function(id, name, departmentId, IsActive) {
        $('#editModalCategory').modal('show');
        console.log(id, name, departmentId, IsActive);
        $scope.cat_Id = id;
        $scope.categoryName = name;
        $scope.categoryId = departmentId;
        $scope.categoryIsActive = IsActive;
        //show category Edit button
        $scope.showCategoryButton = false;
    }
    $scope.updateCategory = function() {
        //show category Edit button
        $scope.loadingIcon = true;
        $scope.showCategoryButton = false;
        var data = {
            name: $scope.categoryName,
            department: 1,
            isActive: true
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.put(BASE_URL + '/api/categories/' + $scope.cat_Id, data, config)
            .success(function(data, status, headers, config) {
                $scope.updateCategory = data;
                console.log("updateCategory", data);
                $scope.loadingIcon = false;
                $scope.getCategory();
                location.reload(true);
                alert("Updated Category");

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    $scope.deleteCategory = function(catId) {
        $scope.loadingIcon = true;
        console.log("catId", catId);
        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }
        var action = confirm("Deleted category");
        if(action === false) {
          return false; // this would do
      } else {


        $http.delete(BASE_URL + '/api/categories/' + catId, config)
            .success(function(data, status, headers, config) {
                console.log("delete category", data);
                $scope.getCategory();
                $scope.loadingIcon = false;

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }
    }
    $scope.cancelCat = function(){
        $('#editModalCategory').modal('hide');
    }
    //edit and delete product
    $scope.editProduct = function(id) {
        $scope.showProductButton = false;
        $('#editModal').modal('show');
        $scope.productId = id;
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
                $scope.productisActive = $scope.getProductList[i].isactive.toString();
            }
        }


    }

    //update product api
    $scope.updateProduct = function() {
        $scope.showProductButton = false;
        $scope.loadingIcon = true;
        var subcat = "no subcat";
        var data = {
            name: $scope.productName,
            description: $scope.productDescription,
            dept: "nonveg",
            cat: $scope.categorySelected,
            subCat: subcat,
            sku: "abcd12345",
            brand: "abcd",
            s1: $scope.productImageUrl1,
            s2: $scope.productImageUrl2,
            s3: $scope.productImageUrl3,
            p1: $scope.productOffer,
            p2: "abcd",
            mainImageUrl: $scope.productImageUrl,
            vendorID: 100,
            quantity: $scope.productquantity,
            listPrice: $scope.productlistPrice,
            salePrice: $scope.productSalePrice,
            discountedPrice: $scope.discountedPrice,
            instock: $scope.instock,
            isActive: $scope.productisActive
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.put(BASE_URL + '/api/products/' + $scope.productId, data, config)
            .success(function(data, status, headers, config) {
                $scope.updateProd = data;
                console.log("updateProduct", data);
                $scope.loadingIcon = false;
                $('#editModal').modal('hide');
                $scope.getProduct();
                $scope.updateAutocomplete();
                // $scope.showToastMessage = true;

                //alert("Updated Product");
                //location.reload(true);

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;

            });
    }
    $scope.cancelProduct = function() {
        $scope.productName = "";
        $scope.productDescription = "";
        $scope.departmentSelected = "";
        $scope.categorySelected = "";
        $scope.productImageUrl1 = "";
        $scope.productImageUrl2 = "";
        $scope.productImageUrl3 = "";
        $scope.productOffer = "";
        $scope.productImageUrl = "";
        $scope.productquantity = "";
        $scope.productlistPrice = "";
        $scope.productSalePrice = "";
        $scope.discountedPrice = "";
        $scope.instock = "";
        $scope.productisActive = "";
        $scope.showProductButton = false;
        $('#editModal').modal('hide');
    }
    $scope.deleteProduct = function(productId) {
        console.log("productId", productId);
        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }
        var action = confirm("Product to be Deleted");
        if(action === false) {
          return false; // this would do
      } else {
        $http.delete(BASE_URL + '/api/products/' + productId, config)
            .success(function(data, status, headers, config) {
                console.log("delete product", data);
                $scope.getProduct();

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }
    }
    //edit and delete todaysDeal
    $scope.editTodayDeals = function(id) {
        console.log(id);
        for (var i = 0; i < $scope.getTodayDealsList.length; i++) {
            if ($scope.getTodayDealsList[i]._id === id) {
                $scope.fromDate = $scope.getTodayDealsList[i].fromDate;
            }
        }

    }
    $scope.deleteBanner = function(dealId) {
        console.log("dealId", dealId);
        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }
        var action = confirm("Banner to be deleted");
        if(action === false) {
          return false; // this would do
      } else {
        $http.delete(BASE_URL + '/api/banner/' + dealId, config)
            .success(function(data, status, headers, config) {
                console.log("delete product", data);
                window.location.reload(true);
                $scope.getBanner();

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }
    }
    //get all orders

    $scope.getAllOrders = function() {
        $scope.loadingIcon = true;
        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/orders', config)
            .success(function(data, status, headers, config) {
                $scope.getAllOrdersList = data;
                $scope.getAllOrdersListLength = data.length;
                $scope.loadingIcon = false;
                for (var i = 0; i < $scope.getAllOrdersList.length; i++) {
                    $scope.getInProgress = $scope.getAllOrdersList[i].orderStatus.name;
                    $scope.getInProgressLength = $scope.getInProgress.length;
                    console.log("$scope.getInProgressLength",$scope.getInProgressLength);
                }
                console.log("get getAllOrdersList", data);
                $scope.getAllUsers();

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    $scope.getAllOrders();

    //clear serahc result of orders
    $scope.clearSearchResult = function(){
      $scope.searchFilter = "";
      $scope.getAllOrders();
    }

    //usersdetails of that order
    $scope.getUserinfoOrders = function(userId){
        console.log("$scope.",$scope.getAllUserList);
        for (var i = 0; i < $scope.getAllUserList.length; i++) {
            if ($scope.getAllUserList[i]._id = userId) {
                $scope.userByOrder = $scope.getAllUserList[i];
                console.log("$scope.userByOrder",$scope.userByOrder);
            }
        }

    }
    //get all order status
    $scope.getAllOrderStatus = function() {

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/orderStatus', config)
            .success(function(data, status, headers, config) {
                $scope.getAllOrdersStatusList = data;
                console.log("get getAllOrdersStatusList", data);


            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    $scope.getAllOrderStatus();
    //get order status changed value
    $scope.orderStatusChangedValue = function(id) {
        console.log("orderStatusname", id);
        $scope.selectedOrderStatusId = id;
        for (var i = 0; i < $scope.getAllOrdersStatusList.length; i++) {
            if ($scope.getAllOrdersStatusList[i]._id == id) {
                $scope.orderStatusObj = $scope.getAllOrdersStatusList[i];
                console.log("$scope.orderStatusObj",$scope.orderStatusObj);
            }
        }


    }


    //edit order staus by order id

    $scope.editOrderStatus = function(order_id) {


        $scope.loadingIcon = true;
        var data = {

            "orderStatus": $scope.orderStatusObj

        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.put(BASE_URL + '/api/orders/' + order_id, data, config)
            .success(function(data, status, headers, config) {
                $scope.updateCategory = data;
                console.log("updateCategory", data);
                $scope.loadingIcon = false;
                $scope.getAllOrders();
                alert("OrderNo" + order_id + " is Updated");
              //  window.location.reload(true);

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    //invoice modal window
    $scope.invoiceDetails = function(order_id, user_email, user_phone) {
        console.log(order_id, user_email, user_phone);
        $scope.user_email = user_email;
        $scope.user_phone = user_phone;
        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/orders/' + order_id, config)
            .success(function(data, status, headers, config) {
                $scope.getByorderId = data;
                console.log("$scope.getByorderId", $scope.getByorderId);
                //$('#invoiceModal').modal('show');

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    //getShipping cost
    $scope.getTotalProductAmount = function (totalProductCost, prodQty, totalOrderCost){
        console.log("totalProductCost",totalProductCost, totalOrderCost, prodQty);
        $scope.thistotalProductCost = totalProductCost;
        var totalItemCost = totalProductCost * prodQty;
        $scope.shippingDeliveryCost = totalOrderCost - totalItemCost;

        console.log();
    }
    //print invoive
    $scope.printInvoice = function() {
        var contents = $('#printArea').html();
        var frame = $('#printframe')[0].contentWindow.document;
        var originalContents = document.body.html;
        // show the modal div
        $('#invoiceModal').css({
            'display': 'block'
        });

        // open the frame document and add the contents
        frame.open();
        frame.write('<!DOCTYPE html><html><head><title>Customer copy of bill</title>' +
            '<link rel="stylesheet" >' +
            '</head><body><div>' +
            '<table class="table table-condensed">' +
            contents + '</table></div></html>');
        frame.close();

        // print just the modal div
        $('#printframe')[0].contentWindow.print();
        document.body.html = originalContents;

    }
    //export to excel
    $scope.exportToExcel = function() {
        // window.open('data:application/vnd.ms-excel,' + $('#orderDetailExport').html());

        // $(document).ready(function(){
        //             $('button').click(function(){
        //                 var data = $('#txt').val();
        //                 if(data == '')
        //                     return;
        //
        //                 JSONToCSVConvertor(data, "Vehicle Report", true);
        //             });
        //         });
        //for each required details
        $scope.gettingReportData = [];
        angular.forEach($scope.getAllOrdersList, function (value, key) {
          var obj = {
            "Order Id":value._id,
            "Order Date" : value.orderDate,
            "User Name" : value.userID.name,
            "User Email" : value.userID.email,
            "Mobile Number" : value.userID.mobile_number,
            "Order Amount" : value.orderAmount,
            "Order Status" : value.orderStatus.name
          };
          $scope.gettingReportData.push(obj);

        });
        console.log("gettingReportData",$scope.gettingReportData);
        JSONToCSVConvertor($scope.gettingReportData, "Order Report", true);

    }
    function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '';
        //Set Report title in first row or line

        CSV += ReportTitle + '\r\n\n';

        //This condition will generate the Label/Header
        if (ShowLabel) {
            var row = "";

            //This loop will extract the label from 1st index of on array
            for (var index in arrData[0]) {

                //Now convert each value to string and comma-seprated
                row += index + ',';
            }

            row = row.slice(0, -1);

            //append Label row with line break
            CSV += row + '\r\n';
        }

        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
            var row = "";

            //2nd loop will extract each column and convert it in string comma-seprated
            for (var index in arrData[i]) {
                row += '"' + arrData[i][index] + '",';
            }

            row.slice(0, row.length - 1);

            //add a line break after each row
            CSV += row + '\r\n';
        }

        if (CSV == '') {
            alert("Invalid data");
            return;
        }

        //Generate a file name
        var fileName = "MyReport_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g,"_");

        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension

        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    //date filter
    $scope.filterBydate = function(toDate) {
        console.log("toDate", toDate);
        var todayDate = new Date(toDate).toString().split(" ").slice(0, 4).join(" ");
        console.log("todayDate", todayDate);
        //  var now = new Date();
        //  var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
        //  isoDate = new Date(toDate).toISOString();
        //  console.log("isoDate",isoDate);
        //  $scope.utcdateFilter = isoDate;
        //date from api utc to local date
        for (var i = 0; i < $scope.getAllOrdersList.length; i++) {
            $scope.ordatesList = $scope.getAllOrdersList[i].orderDate;
            console.log("$scope.ordatesList", $scope.ordatesList);
            var date = new Date($scope.ordatesList);
            date.toString();

            var orderListdate1 = new Date($scope.ordatesList).toString().split(" ").slice(0, 4).join(" ");

            console.log("ordatesList", orderListdate1);
            // IDEA:
            if (todayDate == orderListdate1) {
                $scope.dateList = $scope.ordatesList;
                console.log("$scope.dateList", $scope.ordatesList);
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
    $scope.showAllOrders = function() {
        $scope.dateList = "";
    }
    //get all users
    $scope.getAllUsers = function() {
        var config = {
            headers: {

                'Content-Type': 'application/json'
            }
        }

        $http.get(BASE_URL + '/api/users', config)
            .success(function(data, status, headers, config) {
                $scope.getAllUserList = data;
                $scope.allusersLength = data.length;
                console.log("get getAllUserList", data.length);


            })
            .error(function(data, status, header, config) {
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
    $scope.updateUser = function(userid, sel) {
        console.log("sel", $scope.sel);
        $scope.loadingIcon = true;
        $scope.selectedValue = $('#sel11 :selected').val();
        var config = {
            headers: {

                'Content-Type': 'application/json'
            }
        }

        var data = {

            "isactive": sel

        };

        $http.put(BASE_URL + '/api/users/' + userid, data, config)
            .success(function(data, status, headers, config) {
                $scope.getIsActiveUpdated = data;
                console.log("get getAllUserList", data);
                $scope.loadingIcon = false;
                $scope.getAllUsers();
                if (data.isactive === false) {
                    alert("De-Activation of User will be Applicable on Next Login");
                }

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    //get all feedbacks
    $scope.getAllFeedbacks = function() {
        var config = {
            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AdminToken
            }
        }

        $http.get(BASE_URL + '/api/order/feedback', config)
            .success(function(data, status, headers, config) {
                $scope.getAllFeedbacks = data;
                $scope.getAllFeedbacksLength = data.length;
                console.log("get getAllFeedbacks", data);
                // for (var i = 0; i < $scope.getAllFeedbacks.length; i++) {
                //   $scope.userIdFeedback = $scope.getAllFeedbacks[i].userID;
                //     }
                //     for (var i = 0; i < $scope.getAllUserList.length; i++) {
                //         if ($scope.getAllUserList[i]._id == $scope.userIdFeedback) {
                //         $scope.names =   $scope.getAllUserList[i].name;
                //           $scope.getAllUserList[i].mobile_number;
                //           $scope.getAllUserList[i].email;
                //           console.log("$scope.getAllUserList[i].name;",$scope.getAllUserList[i].name);
                //         }
                //
                //   }
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    $scope.getAllFeedbacks();
    $scope.userNamesFeeback = function(userid) {
        for (var i = 0; i < $scope.getAllUserList.length; i++) {
            if ($scope.getAllUserList[i]._id === userid) {
                $scope.names = $scope.getAllUserList[i].name;
                $scope.mobiles = $scope.getAllUserList[i].mobile_number;
                $scope.emails = $scope.getAllUserList[i].email;
                console.log("$scope.getAllUserList[i].name;", $scope.getAllUserList[i].name);
            }

        }
    }
    //get all locations
    $scope.getAllLocationDeliver = function() {
        var config = {
            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AdminToken
            }
        }

        $http.get(BASE_URL + '/api/deliver/Location', config)
            .success(function(data, status, headers, config) {
                $scope.getAllLocationDeliver = data;
                // $scope.getAllFeedbacksLength = data.length;
                console.log("get getAllLocationDeliver", data);

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    $scope.getAllLocationDeliver();
    //google maps
    // var places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
    $scope.loadGoogleMap = function() {
        var places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
        google.maps.event.addListener(places, 'place_changed', function() {
            var place = places.getPlace();
            var address = place.formatted_address;
            var latitude = place.geometry.location.lat();
            var longitude = place.geometry.location.lng();
            var id = place.id;
            var placeId = place.place_id;
            // var mesg = "Address: " + address;
            // mesg += "\nLongitude: " + longitude;
            // mesg += "\nLatitude: " + latitude;

            $scope.address = address;
            $scope.latitude = latitude;
            $scope.longitude = longitude;
            console.log('address', $scope.address);
            console.log('latitude', $scope.latitude);
            console.log('longitude', $scope.longitude);

        });

    }
    $scope.loadGoogleMap();
    //postLocation
    $scope.postLocation = function() {
        $scope.loadingIcon = true;
        var data = {
            lat: $scope.latitude,
            lng: $scope.longitude,
            name: $scope.address,
            place_id: "ChIJeQ08aCoVXz4Rf-s_ZKsCaFQ"
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.post(BASE_URL + '/api/deliver/Location', data, config)
            .success(function(data, status, headers, config) {
                $scope.postLocationDeliver = data;
                console.log("dataa", data);
                $scope.loadingIcon = false;
                alert("Places we deliver added ");
                window.location.reload(true);
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

    }
    //delete location deliver
    $scope.deleteLocactionDeliver = function(locId) {
        console.log("locId", locId);
        $scope.loadingIcon = true;
        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }
        var action = confirm("Deleted"+locId+"Location we deliver");
        if(action === false) {
          return false; // this would do
      } else {
        $http.delete(BASE_URL + '/api/deliver/Location/' + locId, config)
            .success(function(data, status, headers, config) {
                console.log("delete deleteLocactionDeliver", data);
                $scope.loadingIcon = false;
                window.location.reload(true);
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }

    }
    $scope.getAllLocationDeliver();
    //get scout  locations
    $scope.getListScoutLoc = function() {
        var config = {
            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AdminToken
            }
        }

        $http.get(BASE_URL + '/api/scout/user/Location', config)
            .success(function(data, status, headers, config) {
                $scope.getListScoutLoc = data;
                // $scope.getAllFeedbacksLength = data.length;
                console.log("get getListScoutLoc", data);

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    $scope.getListScoutLoc();
    //get scout name count
    $scope.scoutNamesCount = function(name){
        for (var i = 0; i < $scope.getListScoutLoc.length; i++) {
            if ($scope.getListScoutLoc[i].name = name) {
                return $scope.getListScoutLoc[i].name.length;
            }
        }
    }
    //get delivery cost
    $scope.getDeliveryCost = function() {
        var config = {
            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AdminToken
            }
        }

        $http.get(BASE_URL + '/api/admin/config', config)
            .success(function(data, status, headers, config) {
                $scope.getDeliveryCost = data;
                $scope.getOrderDeliveryCost = data[0].deliveryOrderAmount;
                $scope.getOrderMinCost = data[0].minimumOrderAmount;

                console.log("get getDeliveryCost", data);
                console.log("cond",$scope.getOrderMinCost,$scope.thistotalProductCost);
                if ($scope.getOrderMinCost <= $scope.thistotalProductCost) {
                    $scope.showDeliveryCost = true;
                }

            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }
    $scope.getDeliveryCost();
    //update delivery cost
    $scope.updateDeliveryCost = function() {
        $scope.loadingIcon = true;
        var data = {
            minimumOrderAmount: $scope.minimumCost,
            deliveryOrderAmount: $scope.deliveryCost
        };

        var config = {
            headers: {
                'Authorization': 'Bearer ' + AdminToken,
                'Content-Type': 'application/json'
            }
        }

        $http.put(BASE_URL + '/api/admin/config/1', data, config)
            .success(function(data, status, headers, config) {
                $scope.updatedDeliverycost = data;
                $scope.loadingIcon = false;
                console.log("dataa", data);
                //$scope.getDeliveryCost();
                alert("DeliveryCost Updated ");
                window.location.reload(true);
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

    }

}


// here we define our unique filter
angular.module('RDash').filter('unique', function() {
   // we will return a function which will take in a collection
   // and a keyname
   return function(collection, keyname) {
      // we define our output and keys array;
      var output = [],
          keys = [];

      // we utilize angular's foreach function
      // this takes in our original collection and an iterator function
      angular.forEach(collection, function(item) {
          // we check to see whether our object exists
          var key = item[keyname];
          // if it's not already part of our keys array
          if(keys.indexOf(key) === -1) {
              // add it to our keys array
              keys.push(key);
              // push this item to our final output array
              output.push(item);
          }
      });
      // return our array which should be devoid of
      // any duplicates
      return output;
   };
});
