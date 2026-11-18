$(document).foundation()

$(document).ready(function () {

	console.log("Congratulations. You have just accessed the browser console" +
		" and you also discovered the framework language used to make this game which" +
		" would be Vue.js. From the Vue menu, you can use cheats to cheat against The" +
		" Devil's game. Though God wouldn't like that and allow you into Heaven now would He? " +
		"Isn't cheating a mortal sin? Will your soul still be damned with The Devil with cheating " +
		"added to your list of sins? Cheating definitely wouldn't be a very wise idea.")

	let startButton = document.getElementById("startButtonID");
	let playAgainButton01 = document.getElementById("playAgainButtonID01");
	let playAgainButton02 = document.getElementById("playAgainButtonID02");
	let introBox = document.getElementById("introBoxID");
	let victoryBox = document.getElementById("victorySection");
	let defeatBox = document.getElementById("defeatSection");
	let gameBox = document.getElementById("gameSection");

	let rockButton = document.getElementById("button_rock");
	let paperButton = document.getElementById("button_paper");
	let scissorsButton = document.getElementById("button_scissors");

	let playerIcon = document.getElementById("playerIconID");
	let devilIcon = document.getElementById("devilIconID");

	startButton.addEventListener("mouseover", mouseOverStartButton);
	startButton.addEventListener("mouseout", mouseOutStartButton);
	startButton.addEventListener("click", clickStartButton);

	playAgainButton01.addEventListener("mouseover", mouseOverPlayAgainButton01);
	playAgainButton01.addEventListener("mouseout", mouseOutPlayAgainButton01);
	playAgainButton01.addEventListener("click", clickPlayAgainButton01);

	playAgainButton02.addEventListener("mouseover", mouseOverPlayAgainButton02);
	playAgainButton02.addEventListener("mouseout", mouseOutPlayAgainButton02);
	playAgainButton02.addEventListener("click", clickPlayAgainButton02);

	function mouseOverStartButton() {
		let startButtonHoverTime = new TimelineMax();

		startButtonHoverTime.to(startButton, 0.5, {
			backgroundColor: "#fa1111",
			cursor: "pointer"
		})
	}

	function mouseOverPlayAgainButton01() {
		let playAgainHoverTime = new TimelineMax();

		playAgainHoverTime.to(playAgainButton01, 0.5, {
			backgroundColor: "#fa1111",
			cursor: "pointer"
		})
	}

	function mouseOverPlayAgainButton02() {
		let playAgainHoverTime = new TimelineMax();

		playAgainHoverTime.to(playAgainButton02, 0.5, {
			backgroundColor: "#fa1111",
			cursor: "pointer"
		})
	}

	function mouseOutPlayAgainButton02() {
		let playAgainButtonOffTime = new TimelineMax();

		playAgainButtonOffTime.to(playAgainButton02, 0.5, {
			backgroundColor: "#990303"
		})
	}

	function clickPlayAgainButton02() {
		let hideDefeatBox = new TimelineMax();
		let hideVictoryBox = new TimelineMax();
		let showGameBox = new TimelineMax({
			delay: 1
		});

		hideDefeatBox.to(defeatBox, 1, {
			opacity: 0,
			display: "none"
		})

		showGameBox.to(gameBox, 1, {
			opacity: 1,
			display: "inline"
		})

		hideVictoryBox.to(victoryBox, 1, {
			opacity: 0,
			display: "none"
		})
	}

	function mouseOutStartButton() {
		let startButtonOffTime = new TimelineMax();

		startButtonOffTime.to(startButton, 0.5, {
			backgroundColor: "#990303"
		})
	}

	function mouseOutPlayAgainButton01() {
		let PlayAgainButton01OffTime = new TimelineMax();

		PlayAgainButton01OffTime.to(playAgainButton01, 0.5, {
			backgroundColor: "#990303"
		})
	}

	function clickStartButton() {
		let hideIntroBox = new TimelineMax();
		let showGameBox = new TimelineMax({
			delay: 1
		});

		hideIntroBox.to(introBox, 1, {
			opacity: 0,
			display: "none"
		})

		showGameBox.to(gameBox, 1, {
			opacity: 1,
			display: "inline"
		})
	}

	function clickPlayAgainButton01() {
		let hideDefeatBox = new TimelineMax();
		let hideVictoryBox = new TimelineMax();
		let showGameBox = new TimelineMax({
			delay: 1
		});

		hideDefeatBox.to(defeatBox, 1, {
			opacity: 0,
			display: "none"
		})

		showGameBox.to(gameBox, 1, {
			opacity: 1,
			display: "inline"
		})

		hideVictoryBox.to(victoryBox, 1, {
			opacity: 0,
			display: "none"
		})
	}

	function mouseOutRockButton() {
		let rockButtonOffTime = new TimelineMax();

		rockButtonOffTime.to(rockButton, 0.5, {
			backgroundColor: "#990303"
		})
	}

	function mouseOverPaperButton() {
		let paperButtonHoverTime = new TimelineMax();

		paperButtonHoverTime.to(paperButton, 0.5, {
			backgroundColor: "#fa1111",
			cursor: "pointer"
		})
	}

	function mouseOutPaperButton() {
		let paperButtonOffTime = new TimelineMax();

		paperButtonOffTime.to(paperButton, 0.5, {
			backgroundColor: "#990303"
		})
	}

	function mouseOverScissorsButton() {
		let scissorsButtonHoverTime = new TimelineMax();

		scissorsButtonHoverTime.to(scissorsButton, 0.5, {
			backgroundColor: "#fa1111",
			cursor: "pointer"
		})
	}

	function mouseOutScissorsButton() {
		let scissorsButtonOffTime = new TimelineMax();

		scissorsButtonOffTime.to(scissorsButton, 0.5, {
			backgroundColor: "#990303"
		})
	}

	function hideGameOnDefeat() {
		let hideGameBox = new TimelineMax();

		hideGameBox.to(gameBox, 0.5, {
			opacity: 0,
			display: "none"
		})

		showDefeat();
	}

	function showDefeat() {
		let showDefeatBox = new TimelineMax();

		showDefeatBox.to(defeatBox, 0.5, {
			opacity: 1,
			display: "inline"
		})
	}

	function hideGameOnVictory() {
		let hideGameBox = new TimelineMax();

		hideGameBox.to(gameBox, 0.5, {
			opacity: 0,
			display: "none"
		})

		showVictory();
	}

	function showVictory() {
		let showVictoryBox = new TimelineMax();

		showVictoryBox.to(victoryBox, 0.5, {
			opacity: 1,
			display: "inline"
		})
	}
	
	function playerInLead(){
		let giveLeadToPlayer = new TimelineMax();
		let takeAwayLeadFromDevil = new TimelineMax();
		
		giveLeadToPlayer.to($(".playerIcon"), 1, {css: {color: "white"}});
		takeAwayLeadFromDevil.to($(".devilIcon"), 1, {css: {color: "red"}});
	}
	
	function devilInLead(){
		let giveLeadToDevil = new TimelineMax();
		let takeAwayLeadFromPlayer = new TimelineMax();
		
		giveLeadToDevil.to($(".devilIcon"), 1, {css: {color: "white"}});
		takeAwayLeadFromPlayer.to($(".playerIcon"), 1, {css: {color: "red"}});
	}
	
	function tiedGame(){
		let tiePlayer = new TimelineMax();
		let tieDevil = new TimelineMax();
		
		tiePlayer.to($(".playerIcon"), 1, {css: {color: "red"}});
		tieDevil.to($(".devilIcon"), 1, {css: {color: "red"}});
	}
	
	function resetGameBorder(){
		let resetPlayerBorder = new TimelineMax();
		let resetDevilBorder = new TimelineMax();
		
		resetPlayerBorder.to($(".playerIcon"), 1, {css: {color: "red"}});
		resetDevilBorder.to($(".devilIcon"), 1, {css: {color: "red"}});
	}

	// VUE.js Instance
	//	Vue instance
	let myApp = new Vue(
		// 	instance options as an object
		{
			//	HTML element to which Vue instance will be associated or bound  						   
			el: '#game-container', //	comma separate members in the object
			data: {
				message: 'Choose your first draw to begin the game.',
				playerFace: "./images/playerIcon.svg",
				devilFace: "./images/devilHead.svg",
				playerDrawFaces: ["./images/rock.svg", "./images/paper.svg", "./images/scissors.svg"],
				devilDrawFaces: ["./images/rock.svg", "./images/paper.svg", "./images/scissors.svg"],
				playerCounter: 0,
				devilCounter: 0,
				drawCounter: 0,
				newGameConfirm: ""
			},
			methods: {
				// 	click handler on the button_rock button
				player_drawRock() {
						this.playerFace = this.playerDrawFaces[0]
						this.devilFace = this.devilDrawFaces[Math.floor(this.devilDrawFaces.length * Math.random())];
						this.gameMaster()
						this.checkWinningPlayer()
					},
					player_drawPaper() {
						this.playerFace = this.playerDrawFaces[1]
						this.devilFace = this.devilDrawFaces[Math.floor(this.devilDrawFaces.length * Math.random())];
						this.gameMaster()
						this.checkWinningPlayer()
					},
					player_drawScissors() {
						this.playerFace = this.playerDrawFaces[2]
						this.devilFace = this.devilDrawFaces[Math.floor(this.devilDrawFaces.length * Math.random())];
						this.gameMaster()
						this.checkWinningPlayer()
					},
					gameMaster() {
						// Ties
						if (this.playerFace === this.playerDrawFaces[0] && this.devilFace === this.devilDrawFaces[0]) {
							this.message = "Tie";
							this.drawCounter++;
							this.endGame()
						} else if (this.playerFace === this.playerDrawFaces[1] && this.devilFace === this.devilDrawFaces[1]) {
							this.message = "Tie";
							this.drawCounter++;
							this.endGame()
						} else if (this.playerFace === this.playerDrawFaces[2] && this.devilFace === this.devilDrawFaces[2]) {
							this.message = "Tie";
							this.drawCounter++;
							this.endGame()
						}

						//Player Wins
						else if (this.playerFace === this.playerDrawFaces[1] && this.devilFace === this.devilDrawFaces[0]) {
							this.message = "You win a point. PAPER beats ROCK.";
							this.playerCounter++;
							this.endGame()
						} else if (this.playerFace === this.playerDrawFaces[0] && this.devilFace === this.devilDrawFaces[2]) {
							this.message = "You win a point. ROCK beats SCISSORS.";
							this.playerCounter++;
							this.endGame()
						} else if (this.playerFace === this.playerDrawFaces[2] && this.devilFace === this.devilDrawFaces[1]) {
							this.message = "You win a point. SCISSORS beats PAPER.";
							this.playerCounter++;
							this.endGame()
						}

						//Devil Wins
						else if (this.playerFace === this.playerDrawFaces[0] && this.devilFace === this.devilDrawFaces[1]) {
							this.message = "The Devil wins a point. PAPER beats ROCK.";
							this.devilCounter++;
							this.endGame()
						} else if (this.playerFace === this.playerDrawFaces[2] && this.devilFace === this.devilDrawFaces[0]) {
							this.message = "The Devil wins a point. ROCK beats SCISSORS.";
							this.devilCounter++;
							this.endGame()
						} else if (this.playerFace === this.playerDrawFaces[1] && this.devilFace === this.devilDrawFaces[2]) {
							this.message = "The Devil wins a point. SCISSORS beats PAPER.";
							this.devilCounter++;
							this.endGame()
						}
					},
					checkWinningPlayer() {
						// Devil in the lead
						if (this.playerCounter > this.devilCounter) {
							playerInLead()
						} else if (this.devilCounter > this.playerCounter) {
							devilInLead()
						} else if (this.devilCounter === this.playerCounter){
							tiedGame()
						}
					},
					endGame() {
						if (this.playerCounter === 6) {
							this.message = "Choose your first draw to begin the game",
								this.playerCounter = 0,
								this.devilCounter = 0,
								this.drawCounter = 0,
								this.playerFace = "./images/playerIcon.svg",
								this.devilFace = "./images/devilHead.svg",
								hideGameOnVictory()
						} else if (this.devilCounter === 6) {
							this.message = "Choose your first draw to begin the game",
								this.playerCounter = 0,
								this.devilCounter = 0,
								this.drawCounter = 0,
								this.playerFace = "./images/playerIcon.svg",
								this.devilFace = "./images/devilHead.svg",
								hideGameOnDefeat()
						}
					},
					player_newGame() {
						let newGameConfirm = confirm("Do you really want to start a new game? You'll " +
							"annoy the devil and his demons if you do this.")
						if (newGameConfirm === true) {
							this.message = "The Devil and his demon hordes all snarl in annoyance as they must abide by " +
								"a section of The Book of Hell's Edicts to allow a mortal soul to reset his/her game " +
								"whenever he/she pleases at anytime. The game has been reset.",
								this.playerCounter = 0,
								this.devilCounter = 0,
								this.drawCounter = 0,
								this.playerFace = "./imgs/playerContainer_Empty.jpg",
								this.devilFace = "./imgs/devilContainer_Empty_Annoyed.jpg"
						} else {
							null;
						}
					}
			}
		}
	)

})