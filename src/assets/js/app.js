var App = function(){

    var _pageAccounts = function(){        
        $('body').on('click', '.slide-header--card', function (e) {
              e.preventDefault();
              $(this).closest('.slide-header').toggleClass('changed');
              //alert('YES!');
        });
    }

    var _pageBlockCard = function(){
        $('body').on('click','.block-loader',function(e){
            e.preventDefault();
            $(this).addClass('waiting');
            setTimeout(() => {
              $(this).removeClass('waiting').addClass('activated');
            }, 2500);
        });        
    }

    var _pageExpenseChart = function(){
        $('body').on('click','.card',function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).closest('.scroll-content').addClass('changed');

            // Animation
            $('.card').each(function(e){
                var animation = $(this).attr('data-animation');
                $(this).find('.animated').addClass(animation);
            });
            
            // Hide Data
            $('.card:not(.active) .card--current-balance').hide();            

            setTimeout(function(){
                $('.card .wrap').hide();
            },800);
        });
    }

    return {
        init: function(){
            _pageAccounts();
            _pageBlockCard();
            _pageExpenseChart();         
        } // init
    }// return
}(); // App

$(document).ready(function(){

});

window.onload = function(){
    App.init();
};