
;(function () {
    angular.module('Kelly')
        .component('mainComponent', {
            templateUrl: 'components/main-component.html',
            controller: MainController,
        })

    function MainController() {
        var mc = this;

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
    // $('#plumbbob').animateCss('bounceInDown')
    $('#scroller').animateCss('flash');
    $('#heading').animateCss('slideInLeft')








    }

} ())