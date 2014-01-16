# Dynamic Google Maps Pins
If you're gonna be using this in CakePHP just follow the convention (which is already set up distributed in the folders you see). Now, with the mapscript you can do two things; have a map and display a bunch of pins and in case you have a form in which you require to enter a map's coordinates, it draws a map with a pin, then it puts the coordinates of the pin after you drag-let-go.

1. Use this thing.
2. Download mootools-core-1.4.5-full-nocompat.js.
3. For the map's company icon, it will be located at 'root/icos/company_pin_icon.png' (preferable png for the alpha channel).
4. Your database will have to contain a table named 'locations' with 9 rows named precisely as follows:
	1. 'id' type int, bool and auto-increment.
	2. 'title' type tinytext (or whatever you need).
	3. 'description' type text*.
	4. 'date' type text*.
	5. 'latitude' type double.
	6. 'longitude' type double.
	7. 'image' type tinytext*.
	8. 'created' type datetime*.
	9. 'edited' type datetime*.
5. As you can see in the index.html file that's the basic thing you need for the js to display pins.
6. As for the part where it enters coords in your form fields, either you modify the js or follow the convention as follows:
	1. Your input elements will have to contain id's (if more, please, please use class instead).
	2. <input id="LocationLatitude"...
	3. <input id="LocationLongitude"...
7. I think that's enough, it's a really simple thing to set up anyway, you'll find your way around it.
