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

	}
}