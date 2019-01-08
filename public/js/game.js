class	Game{
	constructor(odometer, value){
		this.value = value;
		this.clicks = value;
		this.odometer = odometer;
		this.odometer.innerHTML = value;
		this.odometer.addEventListener("click",this.countClicks.bind(this));
	}

	countClicks(){
		this.odometer.innerHTML = ++this.clicks;
		this.levelUp();
	}

    levelUp(){
        if(this.clicks>this.value+10){
            document.getElementById("picture_lvl").src = "/public/pictures/test2.jpg";
            document.getElementById("text_lvl").innerText = "Америка это просто печатный станок!";
            document.getElementById("head_lvl").innerText = "Ватник продвинутый";
        }
        if(this.clicks>this.value+20){
            document.getElementById("picture_lvl").src = "/public/pictures/test3.jpg";
            document.getElementById("text_lvl").innerText = "Если вы посмотрите на графики — госдолг США идет вверх по экспоненте. В математике это называют режимом с обострением. Когда система входит в такой режим, она неизбежно разрушается. Американской гегемонии все равно придет конец — это объективный закон";
            document.getElementById("head_lvl").innerText = "Ватник-пассионарий";
        }
    }
}