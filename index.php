<html>
        <head>
                <script type="text/javascript" src="js/mootools-core-1.4.5-full-nocompat.js" style=""></script>
                <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>
                <script type="text/javascript" src="js/mapscript.js"></script>
        </head>
        <body>
        <?php

                ////Uncomment the desired line to show the specified map
                //$mapType = 'pins';
                //$mapType = 'get_coords';
                
                if($mapType == 'pins'): ?>
        <div id="MapLocations">
                <div class="location">
                        <span class="id" style="display:none;">0</span>
                        <span class="title" style="display:none;">Title</span>
                        <span class="description" style="display:none;">Here goes a description</span>
                        <span class="image"  style="display:none;">http://f.cl.ly/items/0Q3H3l29350W2r3U1c0Y/pusheen.gif</span>
                        <span class="latitude" style="display:none;">20.672975</span>
                        <span class="longitude" style="display:none;">-103.372986</span>
                        <span class="date" style="display:none;">Jan 30 2014</span>
                        <span class="icon" style="display:none;">your/icon/path</span>
                </div>
        </div>
        <div id="map-canvas" style="height:300px"/>
        <?php elseif($mapType == 'get_coords'): ?>
                <div style="margin: 10px">
                        <input id="LocationLatitude" value="">
                        <input id="LocationLongitude" value="">
                </div>
                <div id="map-canvas" style="height:300px; margin-top:10px"/>
        <?php endif; ?>
        </body>
</html>