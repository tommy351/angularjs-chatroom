// 初始化
var app = angular.module('app', ['firebase']);

// Chat Controller
app.controller('ChatCtrl', ['$scope', '$firebase', function($scope, $firebase){
  // 初始化 Firebase
  var fb = new Firebase('https://boiling-fire-6161.firebaseio.com/');

  // 初始化留言清單
  $scope.messages = $firebase(fb);

  // 設定留言送出後的動作
  $scope.submit = function(){
    // 驗證姓名與留言是否填寫
    if (!$scope.name || !$scope.content) return;

    // 將留言新增到清單中
    $scope.messages.$add({
      name: $scope.name,
      content: $scope.content
    });

    // 清空留言內容
    $scope.content = '';
  };
}]);