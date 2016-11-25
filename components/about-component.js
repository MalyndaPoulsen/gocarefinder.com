(function () {
    angular.module('Kelly')
        .component('aboutComponent', {
            templateUrl: 'components/about-component.html',
          controller: AboutController,
        })

    function AboutController() {
        var ac = this;

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });

    $('#scroller2').animateCss('flash');
   

    }
}());