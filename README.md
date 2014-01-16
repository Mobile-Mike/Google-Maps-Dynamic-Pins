# Dynamic Google Maps Pins
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
