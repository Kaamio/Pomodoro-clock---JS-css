window.onload = function() {


// Haetaan tarvittavat muuttujat
var minuutit = document.getElementById("minutes");
var sekunnit = document.getElementById("seconds");
var vari = document.getElementsByClassName("näyttö");
var a = 0;
var b = 25;

//Nappulat joilla kelloa hallitaan
var start = document.getElementById("start");
start.addEventListener("click", paalle);

var stop = document.getElementById("stop");
stop.addEventListener("click", pysayta);

var restart = document.getElementById("restart")
restart.addEventListener("click", uudista);

var status = document.getElementById("status")

//Työaika (25min) hallinta , jos false niin 5min tauko
var duuniaika = true;


function laskuri() {

	if (a>0) {
		a--;
		if (a >= 10) {
			sekunnit.innerHTML = a;
		}
		else {
			sekunnit.innerHTML = "0"+a;
		}
	}
//Jos 25min mennyt ja 5 min tauko alkaa
else if (a == 0 && b == 0 && duuniaika) {
	 	b = 5;
	 	minuutit.innerHTML = b;
	 	duuniaika = false;
	 	status.innerHTML="Brake 5!"
	 	for (i=0; i<vari.length; i++) {
	 		vari[i].style.color = "#66B447";
	 	}
	 	 }
//Jos 5 min tauko mennyt ja 25 min duuni alkaa
else if (a == 0 && b == 0 && !duuniaika) {
	 	b = 25;
	 	minuutit.innerHTML = b;
	 	duuniaika = true;
	 	status.innerHTML="Work hard!"
	 	for (i=0; i<vari.length; i++) {
	 		vari[i].style.color = "#A52A2A";
	 	}
	 	 }	 	 

	else {
	b--;
	minuutit.innerHTML = b;
 
	a = 59;
	sekunnit.innerHTML = a;
	}

}
function paalle() {
	kello = setInterval(laskuri, 1000)
	}


function pysayta() {
	clearInterval(kello);
	
}

function uudista() {
	clearInterval(kello);
	 a = 0;
	 b = 25;
	minuutit.innerHTML = b;
	sekunnit.innerHTML = "0"+a;
	duuniaika = true;
	status.innerHTML="Working"
}
}