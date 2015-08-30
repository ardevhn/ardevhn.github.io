var map;
jQuery(document).ready(function(){

//15.5155414,-87.9840303
    map = new GMaps({
        div: '#map',
        lat: 15.5155414,
        lng: -87.9840303,
    });
    map.addMarker({
        lat: 15.5155414,
        lng: -87.9840303,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">A &amp; R Development S. de R.L.</h5><p><span class="region">Res. Salamanca Bloque E Casa 6</span><br><span class="city">San Pedro Sula</span><br /><span class="postal-code">21101</span><br><span class="country-name">HN</span></p>'
        }
        
    });

});