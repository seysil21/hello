let boxes = document.getElementsByClassName("box");
		
		let score = `<h3>SCORE</h3>`
		let text = `<h3>hello</h3>`;

		boxes = Array.from(boxes);
		let scoreBoard = boxes[9]

		let randomNumber;
//		let sec = 1000;	
//		var i
		document.getElementById("play-button").addEventListener("click", function(e){
			let randomizeNumber = function() {
			setInterval(function() {
				randomNumber = Math.abs(Math.ceil(Math.random() * 9 - 1));
				
				
			}, 3000)
			
			console.log(randomNumber)
			

		}

		function displaytext() {
//			boxes[4].innerHTML = text;
//			boxes.[randomNumber -1].innerHTML = ""
//			boxes[randomNumber].innerHTML = text
			
			
			setInterval(function(){
			boxes[randomNumber].innerHTML = text;
			}, 3000)
			
//			var arr = [0,1,2,3,4,5,6,7,8]
//			for(i  = 0; i < arr.length; i++){
//				
//			}
			 
			//2 remove 3 create 5/2 display 
			
			setInterval(function(){
			if( boxes[randomNumber].innerHTML == text ){
			
			boxes[randomNumber].innerHTML = "" ;
			
			}}, 4000)
			
			
		}


//		function changePlace() {
//			setInterval(function() {
//				displaytext()
//			}, 3000)
//		}
			randomizeNumber()
//		changePlace()
		displaytext()
		e.preventDefault()
		})
		
		var scoreNum = 0
		
		scoreBoard.style.backgroundColor = "grey"
		var ok
		
		for(var count = 0 ; count < boxes.length; count++){
		boxes[count].addEventListener("click", function(e){
			if(e.target.classList.contains(`${randomNumber}`)){
				e.target.style.backgroundColor = "green";
				scoreNum += 5
				
				setTimeout(function(){
				e.target.style.backgroundColor = "#3d3d3d"
				}, 2000)
				ok = true;
				
			}
			
			else{
				e.target.style.backgroundColor ="red";
				setTimeout(function(){
				e.target.style.backgroundColor = "#3d3d3d"
				}, 2000)
				
			}
//			scoreNum += 5
//			console.log(scoreNum)
//			console.log(e.target.classList.contains(3))
			scoreBoard.innerHTML = `</h3>${score}: ${scoreNum}</h3>`
			e.preventDefault()
			
		})
		}
		console.log(randomNumber)

		

//		console.log(boxes[4])
