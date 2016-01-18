(function() {
  'use strict';

  angular
    .module('spa')
    .controller('mbLikesController', LikesController);

  /** @ngInject */
  function LikesController($scope, mbLikes) {
    var vm = this;
    vm.message = $scope.message;
    var liked = false;

    vm.changeLike = function() {
      var actLike = liked ? 'sendDislike' : 'sendLike';
      liked = !liked;
      mbLikes[actLike](vm.message.id);
    };

    mbLikes.onLike(vm.message.id, function(action) {
      $scope.$apply(function() {
        vm.message.likes.push(action);
      });
    });

    mbLikes.onDislike(vm.message.id, function(action) {
      var thisLike = vm.message.likes.filter(function(like) {
        return like.id === action.id;
      }).pop();

      var index = vm.message.likes.indexOf(thisLike);

      $scope.$apply(function() {
        vm.message.likes.splice(index, 1);
      });
    });
  }
})();
