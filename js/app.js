angular
  .module("firstApp", ['firstApp.firstService', 'angularMoment'] )
  .controller("FirstController", function($scope, firstService) {
    $scope.view = {};
    $scope.view.posts = firstService.getAllUsers;
    $scope.view.showComments = false;
    $scope.view.showCommentsForm = false;
    $scope.view.createAPost = false;
    $scope.newComment = {};


    $scope.upvote = function(post) {
        post.voteTotal += 1;

    }
    $scope.downvote = function(post) {
      post.voteTotal -= 1;
    }
    $scope.addPost = function() {
      firstService.getAllUsers.push ({
        picture: $scope.imageURL,
        title: $scope.title,
        voteTotal: 0,
        author: $scope.author,
        description: $scope.description,
        commentsList: [],
        date: new Date()
      });
      $scope.imageURL = "",
      $scope.title = "",
      $scope.author = "",
      $scope.description = "";
      $scope.createAPost = false;
    }
    $scope.addComment = function(post) {
      post.commentsList.push ({ name: $scope.newComment.name, postlet: $scope.newComment.text }),
      console.log(post.commentsList);
      console.log($scope.name);
      console.log($scope.newComment.name);
      $scope.newComment = {};
    }


  });

  //anything with ng-model will be put on the scope
