// 初始化
var app = angular.module('app', ['firebase']);

// Chat Controller
app.controller('ChatCtrl', ['$scope', function($scope){
  // 初始化留言清單
  $scope.messages = [];

  // 設定留言送出後的動作
  $scope.submit = function(){
    // 驗證姓名與留言是否填寫
    if (!$scope.name || !$scope.content) return;

    // 將留言新增到清單中
    $scope.messages.push({
      name: $scope.name,
      content: $scope.content
    });

    // 清空留言內容
    $scope.content = '';
  };
}]);