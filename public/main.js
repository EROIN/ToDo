var app = angular.module('todo', []);

app.controller('MainController', function($scope, $http) {
    $http.get("/todo")
    .then(function(response) {
      console.log(response.data)
        $scope.todos=response.data
    });

    var x=1;
    $http.post('/todo',{text:x})
    .then(function(response){
      console.log(response.data)
      $scope.todos.unshift({text:x})
      x+=1
    })

    $http({
    method: 'DELETE',
    url: '/todo',
    data: {index:2},
    headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    .then(function(response){
      console.log("SDsdsdsd",response.data);
      delete $scope.todos[2]
    });

    // $http.delete('todo',{data:{index:1}})
    // .then(function(response){
    //   console.log('assas',response.data)
    // })
});
