let worter=["haus", "essen", "nikita", "banane",]
let Versuche=15
let wort = worter[Math.floor(Math.random()*worter.length)];
var Audio=new Audio('s.mp3')
document.querySelector(".Start").onclick=function() {
	location=location

}
let buchstaben =[]
document.querySelector(".Kontrolieren").onclick=function() {
	let buchstabe = document.querySelector(".Buchstabe").value;
	buchstaben.push(buchstabe)
	let Antwort = ""
	for (let i=0;i<wort.length;i++){
		if (buchstaben.indexOf(wort[i])!= -1) {
			Antwort = Antwort + wort[i]
						
		}
		else {
			Antwort = Antwort + "*"
		}

	}
	if (wort.indexOf(buchstabe)== -1) {
		Versuche=Versuche-1 
		document.querySelector(".Versuche").innerHTML=Versuche 
	}
	if (Versuche==0) {
	document.querySelector(".Kontrolieren").disabled=true
	document.getElementById('block').style.backgroundImage="url('j.gif')";
	document.getElementById('game').style.display="none"
	Audio.play()


	
	}
	document.querySelector(".Wort").value=Antwort
	if (wort==Antwort) {

	document.getElementById('f').style.display="block"
	}
	document.querySelector(".Buchstabe").value=""
	document.querySelector(".Buchstabe").focus()

	
}
