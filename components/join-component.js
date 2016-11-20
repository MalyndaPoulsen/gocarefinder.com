(function () {
    angular.module('Kelly')
        .component('joinComponent', {
            templateUrl: 'components/join-component.html',
            controller: JoinController
        })
    function JoinController(AuthService) {
        const jc = this;
        jc.join = function (user) {
            if(user){
                user.applied = Date.now();
                AuthService.join(user);
            }
        }
    }

} ());