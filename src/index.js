import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';


$(function () {
    $('[data-toggle="tooltip"]').tooltip();


    $('.add-to-cart-btn').click(function(){
        alert('add the product to the pocket');
    });

    $('#copyright').text("جميع الحقوق محفوظة للمتجر لسنة "+ new Date().getFullYear());


    $('.product-option input[type="radio"]').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    })

    $('[data-product-quantity]').change(function(){
        
        var  newQuantity=$(this).val();

        var parent=$(this).parents('[data-product-info]');

        var pricePerUnit = parent.attr('data-product-price');

        var TotalPriceForProduct = newQuantity * pricePerUnit;
        
        parent.find('.total-price-for-product').text(TotalPriceForProduct+'$');

        
        calculatetotal();
    });

    $('[data-remove-from-cart]').click(function(){
        $(this).parents('[data-product-info]').remove();

        calculatetotal();
    });



    function calculatetotal(){
        var totalPriceForAllProducts = 0 ;

        $('[data-product-info]').each(function(){

            var pricePerUnit= $(this).attr('data-product-price');
        
            var quantity= $(this).find('[data-product-quantity]').val();

            var totalPriceForProduct=pricePerUnit*quantity;

            totalPriceForAllProducts =  totalPriceForAllProducts + totalPriceForProduct;
        });

        $('#total-price-for-all-products').text(totalPriceForAllProducts);
    };

    var citisbyvontry={
        sa:['جدة','الرياض'],
        eg:[' الاسكندنافية','القاهرة'],
        jo:['القاهرة','عمان'],
        Mo:['سلا الجديدة','مراكش']
    };

    /*fach l paye kitbdel */
    $('#form-checkout select[name="country"]').change(function(){
        /*njibo lcode t paye */
        var country =$(this).val();
        /*njibo lmdoun dial had lblad */
        var cities= citisbyvontry[country];
        /**nfrrgho dik list tlmodon */
        $('#form-checkout select[name="city"]').empty();
        /**n3awdonowrriw nkhtaro lmdinaa */
        $('#form-checkou select[name="city"]').append(
            '<option disabled selected  value="">اختر المدينة</option>'
        );
        /**nzido dok lmdon l lista again */
        cities.forEach(function(city) {
            var newOption=$('<option></option>');
            newOption.text(city);
            newOption.val(city);
            $('#form-checkout select[name="city"]').append(newOption);
        });
    });

    /**hna bach ila clickina  3la payement maison ithiid dik payement card*/
    $('#form-checkout input[name="payement_method"]').change(function(){
        /**njibo lval dial dakchi llikhtarina f radiobutton */
        var paymentmethode =$(this).val();

        if(paymentmethode === 'on_delivary'){

            $('#credit-card-info input').prop('disabled',true);

        }else{

            $('#credit-card-info input').prop('disabled',false);
        }

        $('#credit-card-info').toggle();
    });
/**jquerry slider */
$( function() {
    $( "#price-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 250, 800 ],
      slide: function( event, ui ) {
        $( "#price-min" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#price-max" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

});

