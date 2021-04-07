var App = function() {

    /* Initialization UI Code */
    var uiInit = function() {

        // Handle UI
        handleHeader();
        handleMenu();
        // scrollToTop();
    };

    /* Handles Header */
    var handleHeader = function(){
        var header = $('header');

        $(window).scroll(function() {
            // If the user scrolled a bit (150 pixels) alter the header class to change it
            if ($(this).scrollTop() > header.outerHeight()) {
                header.addClass('header-scroll');
            } else {
                header.removeClass('header-scroll');
            }
        });
    };

    /* Handles Main Menu */
    var handleMenu = function(){
        var sideNav = $('.site-nav');

        $('.site-menu-toggle').on('click', function(){
            sideNav.toggleClass('site-nav-visible');
        });

        sideNav.on('mouseleave', function(){
            $(this).removeClass('site-nav-visible');
        });
    };

    return {
        init: function() {
            uiInit(); // Initialize UI Code
        }
    };
}();

/* Initialize app when page loads */
$(function(){ App.init(); });

$(document).ready(function(){
    $( ".avatar, .login" ).click(function() {
        $("#modalauth").modal();
        $(".show-mdregister").css( "display", "none" );
        $(".show-mdlogin").css( "display", "block" );
    });

    $( ".activity-post-detail" ).click(function() {
        $("#modalactivity").modal();
    });

    $( ".first-user-vote" ).click(function() {
        $("#modalfirstvote").modal();
    });

    $( ".btn-report-post" ).click(function() {
        $("#modalreport").modal();
    });

    $( ".register" ).click(function() {
        $("#modalauth").modal();
        $(".show-mdlogin").css( "display", "none" );
        $(".show-mdregister").css( "display", "block" );
    });

    $( "#btn-mdlogin" ).click(function() {
        $(".show-mdlogin").css( "display", "block" );
        $(".show-mdregister").css( "display", "none" );
    });

    $( "#btn-mdregister" ).click(function() {
        $(".show-mdlogin").css( "display", "none" );
        $(".show-mdregister").css( "display", "block" );
    });

    $(".activity-list-vote").css( "display", "inline-block" );
    $(".activity-list-comment").css( "display", "none" );

    $( ".m-tab-comment" ).click(function() {
        $(".activity-list-vote").css( "display", "none" );
        $(".activity-list-comment").css( "display", "inline-block" );
        $(".m-tab-vote-li").removeClass("active");
        $(".m-tab-comment-li").addClass("active");
    });

    $( ".m-tab-vote" ).click(function() {
        $(".activity-list-vote").css( "display", "inline-block" );
        $(".activity-list-comment").css( "display", "none" );
        $(".m-tab-vote-li").addClass("active");
        $(".m-tab-comment-li").removeClass("active");
    });

    $(".response-reply-box").css( "display", "none" );

    $( ".btn-reply" ).click(function() {
        $(".response-reply-box").toggle();
    });

    $( "#add-poll" ).click(function() {
        $(".write-poll-options-wrapper").toggle();
        $(".control-anchor").addClass("active");
        if ($("#poll-btn-icon").hasClass("mdi-checkbox-blank-outline")) {
            $("#poll-btn-icon").addClass("mdi-checkbox-marked-outline");
            $("#poll-btn-icon").removeClass("mdi-checkbox-blank-outline");
        } else {
            $("#poll-btn-icon").addClass("mdi-checkbox-blank-outline");
            $("#poll-btn-icon").removeClass("mdi-checkbox-marked-outline");
        }
    });

    var addPollInput = '<input type="text" placeholder="Choice">';

    $( ".add-more-poll" ).click(function() {
        $(".list-polll").append(addPollInput);
    });

    $('.poll-wrapper a').on('click', function(){
        $('.poll-wrapper a.active').removeClass('active');
        $(this).addClass('active');

        if ($(".poll-wrapper a i").hasClass("mdi-checkbox-marked-circle-outline")) {
            $(".poll-wrapper a i").addClass("mdi-checkbox-blank-circle-outline");
            $(".poll-wrapper a i").removeClass("mdi-checkbox-marked-circle-outline");
        }

        if ($(".poll-wrapper a.active i").hasClass("mdi-checkbox-blank-circle-outline")) {
            $(".poll-wrapper a.active i").addClass("mdi-checkbox-marked-circle-outline");
            $(".poll-wrapper a.active i").removeClass("mdi-checkbox-blank-circle-outline");
        }

    });

});

$(".category-tags-input").select2({
    placeholder: "Gõ để nhận gợi ý...",
    allowClear: true
});