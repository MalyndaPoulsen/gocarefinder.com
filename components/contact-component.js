(function () {
    angular.module('Kelly')
        .component('contactComponent', {
            templateUrl: 'components/contact-component.html',
            controller: ContactController,
        })
    function ContactController($http) {
        var cc = this;
        
        cc.submit = function(formData){
            $http.post('/send', formData).then(function(res){
                cc.message = res.data.message
                cc.error = res.data.error
            })
        }
      
    }

} ());
