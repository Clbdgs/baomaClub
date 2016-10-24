/**
 * Created by hxsd on 2016/9/13.
 */


 var myapp = angular.module('cupShop',[]);

    myapp.controller("myCtrl",function(){
    var  oul = document.getElementById('list');
    var oli = oul.getElementsByTagName('li');
    var oa = oul.getElementsByTagName('a');
    var oindex = document.getElementById("index");
    var ocontent = document.getElementById("content");
    var odiv = ocontent.children;
        for(var i=0;i<oli.length;i++) {
            (function (index) {
                oli[i].onclick = function () {
                    for (var j = 0; j < oli.length; j++) {
                       odiv[j].style.display = "none";
                       oli[j].className = "";
                        oa[j].className = "";
                        oindex.style.display = "none";
                        oa[index].className = "bb";
                        oli[index].className = "bs";
                        odiv[index].style.display = "block";
                    }
                }
            })(i);
        }
    });

    myapp.controller("oneCtrl",function($scope,$http){
        var url="data/productList.json";
        $http.get(url).success(function(data){
            $scope.productList_1 = data[0];
            $scope.productList_2 = data[1];
            var opro = document.getElementById('products');
            var omove = document.getElementById('move');
            var dist = 0;
            omove.style.left = dist +'px';
            omove.style.width = $scope.productList_1.length * 277+'px';
        });

        $scope.lMove=function(){
            $scope.obox = document.getElementById('box');
            $scope.oW= $scope.obox.offsetWidth;
            dist -= $scope.oW+29;
            console.log(dist);
        };
        $scope.rMove=function(){
            $scope.obox = document.getElementById('box');
            $scope.oW = $scope.obox.offsetWidth;
            dist += $scope.oW+29;
            console.log(dist);
        };
        });

    myapp.controller("twoCtrl",function($scope,$http){
        var url="data/productList.json";
        $http.get(url).success(function(data){
            $scope.productList_3 = data[2];
        });

        $scope.pageNum = 1;
        $scope.pageSize = 9;

        $scope.selectPage = function(newPage){
            $scope.pageNum = newPage;
        };

    });

