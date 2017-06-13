$(document).ready(function(){


	//set up audio
	var noise1 = new Audio();
	noise1.src = "assets/audio/crystal01.mp3";

	var noise2 = new Audio();
	noise2.src = "assets/audio/crystal02.mp3";

	var noise3 = new Audio();
	noise3.src = "assets/audio/crystal03.mp3";

	var noise4 = new Audio();
	noise4.src = "assets/audio/crystal04.mp3";

	//need to generate randomNum from 19 -120
	
	var randomNum = Math.floor(Math.random() * 101+19);
	$('#randomNumber').text(randomNum);

	//crystals need to be from 1- 12
		var num1 = Math.floor(Math.random() * 11+1);
		//alert(num1);
		var num2 = Math.floor(Math.random() * 11+1);
		//alert(num2);
		var num3 = Math.floor(Math.random() * 11+1);
		//alert(num3);
		var num4 = Math.floor(Math.random() * 11+1);
		//alert(num4);

	var playerTotal = 0;
	var wins = 0;
	var losses = 0;
	$('#winsScore').text('Wins: ' + wins);
	$('#lossesScore').text('Losses: ' + losses);


	//set button 1 controls
	$('#crystalOne').click(function(){
		playerTotal+=num1;
		$('#scoreKeeper').text(playerTotal);
		noise1.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});

	//set button 2 controls
	$('#crystalTwo').click(function(){
		playerTotal+=num2;
		$('#scoreKeeper').text(playerTotal);
		noise2.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});

	//set button 3 controls
	$('#crystalThree').click(function(){
		playerTotal+=num3;
		$('#scoreKeeper').text(playerTotal);
		noise3.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});
	$('#crystalFour').click(function(){
		playerTotal+=num4;
		$('#scoreKeeper').text(playerTotal);
		noise4.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});

	//set endgame conditions
	function endGameConditions(){
		if (playerTotal==randomNum){
			wins++;
			$('#endGameMessage').text('A Winner is You!!!')
			$('#winsScore').text('Wins:' + wins);
			reset();
		}else if (playerTotal > randomNum){
			losses++;
			$('#endGameMessage').text('You have failed!')
			$('#lossesScore').text('Losses: ' + losses);
			reset();
		}else{
			$('#endGameMessage').text('Game on, good luck')
		}
	}

	// set up Reset function
	function reset(){
		playerTotal=0;
		$('#scoreKeeper').text(playerTotal);
		randomNum = Math.floor(Math.random() * 101 + 19);
		$('#randomNumber').text(randomNum);

		num1 = Math.floor(Math.random() * 11 + 1);
		num2 = Math.floor(Math.random() * 11 + 1);
		num3 = Math.floor(Math.random() * 11 + 1);
		num4 = Math.floor(Math.random() * 11 + 1);
		
	}


});




