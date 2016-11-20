angular.module("Kelly")
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    
       .state('home',{
        url: '/',
        templateUrl: 'components/home.html'
    })
    .state('join',{
        url: '/join',
        template: '<join-component></join-component>'
    })
    .state('applicants',{
        url: '/applicants',
        template: '<applicants-component></applicants-component>'
    })

    $urlRouterProvider.otherwise('/')

})