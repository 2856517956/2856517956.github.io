app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes=[
    {id:'ertong',name:'儿童',img:'http://img3x8.ddimg.cn/20/27/24042368-1_l_6.jpg',description:'儿童书籍'},
    {id:'lishi',name:'历史',img:'http://img3x9.ddimg.cn/93/25/24023829-1_l_5.jpg', description:'历史书籍'},
    {id:'dongman',name:'动漫',img:'http://img3x7.ddimg.cn/15/2/24029097-1_l_5.jpg',description:'动漫书籍'},
    {id:'qingchuwenxue',name:'青春文学', img:'http://img3x8.ddimg.cn/26/8/24009308-1_l_2.jpg',description:'青春文学书籍'},
  ];
}]);
