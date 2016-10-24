/**
 * Created by hxsd on 2016/9/17.
 */
angular.module("myapp").controller("new_centerCtrl",function ($scope,$http) {
    var url="views/index/new_centent/news_center.json";
    $http.get(url).success(function (data) {
        $scope.data=data;
    });
    $scope.pageNum=1;
    $scope.pageSize=4;

    $scope.totalPage=function () {
        return Math.ceil($scope.data.length/$scope.pageSize);
    };
    $scope.getClass=function (newPageNum) {
        $scope.pageNum = newPageNum;
    };
    $scope.prev=function () {
        if($scope.pageNum>1)$scope.pageNum--;
    };

    $scope.next=function () {
        //$scope.pageNum++;
        if($scope.pageNum<$scope.totalPage()){
            $scope.pageNum++;
        }
    };
    $scope.getActionClass=function (currentPage) {
        return currentPage == $scope.pageNum ? "ac" : "";
    };

});