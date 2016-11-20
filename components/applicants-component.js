(function () {

    angular.module('Kelly')
        .component('applicantsComponent', {
            templateUrl: 'components/applicants-component.html',
            controller: ApplicantsController
        })

    function ApplicantsController($scope, AuthService) {
        var ac = this;
        function update() {
            $scope.$evalAsync();
        }

        AuthService.getApplicants(function (applicants) {
            ac.applicants = applicants;
            update();
        });
    }

} ())