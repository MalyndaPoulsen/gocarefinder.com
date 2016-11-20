(function () {
    angular.module('Kelly')
        .component('servicesComponent', {
            templateUrl: 'components/services-component.html',
          controller: ServiceController,
        })
    function ServiceController() {
        var sc = this;

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });

    $('#scroller').animateCss('flash');


    }

}());