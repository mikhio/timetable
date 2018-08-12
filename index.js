var d = new Date();

var tasks = [
	"7. Codewars 6 kata",
	"1. Olimpiada and English",
	"2. Node.js and JS",
	"3. Olimpiada and English",
	"4. Node.js and JS",
	"5. Arduino and English",
	"6. Arduino"
]
var body = document.body;
 var el = document.createElement('div');
 body.appendChild(el);
 el.className = 'text';
 el.innerText = tasks[d.getDay()];