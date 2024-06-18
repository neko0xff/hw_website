/*
*   請引用JQuary
*   `<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>`
*/

import $ from 'jquery';
window.jQuery = window.$ = $;
$(selector).hide();

if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded');
} else {
    jQuery(document).ready(function ($) {
        $('.nav_a').on('click', function (e) {
            e.preventDefault();
            $('.nav_ul').toggleClass('active');
            var $icon = $(this).find('i');
            if ($icon.hasClass('fas fa-bars')) {
                $icon.removeClass('fas fa-bars').addClass('fas fa-times');
            } else {
                $icon.removeClass('fas fa-times').addClass('fas fa-bars');
            }
        });
    });
}

 