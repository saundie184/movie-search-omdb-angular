'use strict';

app.controller('SearchController', ['$scope', '$http', SearchController]);

function SearchController($scope, $http) {
  var vm = this;
  vm.display = 'Awaiting response...';

  vm.searchDB = function searchDB(title) {
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + title
    }).then(onSuccess, onFailure);


    function onSuccess(response) {
      vm.movieArray = response.data.Search;
      console.log(response.data.Search)
    }

    function onFailure(response) {
      vm.display = 'ERROR' + response;
    }
  };
}

app.controller('ShowPageController', ['$scope', '$http', '$routeParams', ShowPage]);

function ShowPage($scope, $http, $routeParams) {
  var vm = this;
  vm.movieData = $routeParams.param1;

  searchDB(vm.movieData);

  function searchDB(id) {
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?i=' + id + '&plot=short&r=json'
    }).then(onSuccess, onFailure);

    function onSuccess(response) {
      // vm.imdb = response.data
      // console.log(vm.imdb);
      vm.movieStats = {
        title: response.data.Title,
        year: response.data.Year,
        rated: response.data.Rated,
        released: response.data.Released,
        runtime: response.data.Runtime,
        genre: response.data.Genre
      };
    }

    function onFailure(response) {
      vm.display = 'ERROR' + response;
    }
  };



}
