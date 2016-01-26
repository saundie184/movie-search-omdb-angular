app.config(function($routeProvider) {
  $routeProvider
    .when('/show/:param1', {
      templateUrl: 'showpage.html',
      controller: 'ShowPageController as SP'
    })
    // .when('/', {
    //   templateUrl: 'main.html'
    // })
    .otherwise({
      redirectTo: '/'
    });
});
