angular.module('app.services', [
  'services.OrganizationFactory',
<<<<<<< HEAD
  'services.ProjectFactory',
=======
>>>>>>> (fix) Squashed some Bugs in teh factories
  'services.UserFactory',
  'services.TaskFactory',
  'services.EmailFactory'
  ])

.factory('Auth', function ($http, $location, $window) {
  var teamName = '';

  // sends user login input to db
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/login',
      data: user
    })
    // if successful, send encoded token back to auth.js
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    // if successful, send encoded token back to auth.js
    .then(function (resp) {
      return resp.data.token;
    });
  };

  // checks if user has a previously stored web token
  // returning false will redirect user to signin page
  var isAuth = function () {
    return !!$window.localStorage.getItem('auth-token');
  };

  // clears web token and redirect to signin
  var signout = function () {
    $window.localStorage.removeItem('auth-token');
    $location.path('/signin');
  };
  var getTeamName = function () {
    return teamName;
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout,
    getTeamName: getTeamName
  };
});
