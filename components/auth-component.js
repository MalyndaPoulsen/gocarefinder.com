(function () {

    angular.module('Kelly')
        .component('authComponent', {
            templateUrl: 'components/auth-component.html',
            controller: AuthController
        })
        .service('AuthService', function () {
            var config = {
                apiKey: "AIzaSyAqOtuRlryQLY6X6WU7wGIhaSQznvNlTMk",
                authDomain: "kelly-f0dd6.firebaseapp.com",
                databaseURL: "https://kelly-f0dd6.firebaseio.com"
            };
            firebase.initializeApp(config);

            var auth = firebase.auth();
            var db = firebase.database(); 

            this.login = function (user, cb) {
                auth.signInWithEmailAndPassword(user.email, user.password).then(function(authData){
                    return cb(authData);
                })
            }

            this.getMember = function(){
                return
            }

            this.join = function(user){
                db.ref('applicants').push(user);
            }

            this.getApplicants = function(cb){
                db.ref('applicants').on('value', function(snapshot){
                    cb(snapshot.val());
                })
            }
        })

    function AuthController($scope, $state, AuthService) {
        var ac = this;
        ac.member = AuthService.getMember();
        ac.login = function () {
            clearErr();
            AuthService.login(ac.auth, handleDBResponse, handleError);
        };

        ac.logout = function () {
            clearErr();
            AuthService.logout();
            ac.member = {};
            $state.go('home')
        };
        function update() {
            $scope.$evalAsync();
        }
        function clearErr() {
            ac.authErr = '';
        }

        function handleDBResponse(member) {
            if (member) {
                ac.member = member;
                $state.go('applicants');
            }
        }
        function handleError(err){
            ac.error = err.message;
        }
    }
} ())