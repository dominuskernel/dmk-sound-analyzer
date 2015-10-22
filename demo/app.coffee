do ->
  'use strict'
  LoadSoundAnalizer = ($scope, $http)->
    $scope.start = true
    $scope.volume = 1
    $scope.isLoaded = false
    $http.get('data/music.json').success((data)->
      $scope.music = data
      $scope.isLoaded = true
    )

  angular
    .module('app', ['dmk.sound.analyzer'])
    .controller('LoadSoundAnalizer',LoadSoundAnalizer)

  LoadSoundAnalizer.$inject = ['$scope', '$http']

  return