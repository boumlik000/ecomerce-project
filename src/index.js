import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();


    $('.add-to-cart-btn').click(function(){
        alert('add the product to the pocket');
    });

    $('#copyright').text("جميع الحقوق محفوظة للمتجر لسنة "+ new Date().getFullYear());

})

