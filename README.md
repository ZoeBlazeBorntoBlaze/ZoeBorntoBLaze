<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Poppins:wght@300;400;600&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #ffd9e5, #fff5f7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.container {
  text-align: center;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  color: #b85c7a;
  margin-bottom: 10px;
}

p {
  color: #8d6672;
  font-size: 16px;
  margin-bottom: 40px;
}


/* Envelope */

.envelope {
  width: 260px;
  height: 170px;
  background: #fff;
  margin: auto;
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(184,92,122,0.25);
  transition: transform .5s;
}

.envelope:hover {
  transform: scale(1.05);
}

.flap {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 130px solid transparent;
  border-right: 130px solid transparent;
  border-top: 90px solid #f7b7ca;
  top:0;
  left:0;
  transform-origin: top;
  transition: transform 1s;
}

.letter {
  position:absolute;
  width:220px;
  height:130px;
  background:white;
  left:20px;
  top:25px;
  border-radius:8px;
  transition:1s;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#b85c7a;
  font-weight:600;
}


/* Open animation */

.open .flap {
  transform: rotateX(180deg);
}

.open .letter {
  transform: translateY(-100px);
}


/* Button */

.tap {
  margin-top:40px;
  background:#d986a2;
  border:none;
  padding:15px 35px;
  border-radius:50px;
  color:white;
  font-size:16px;
  cursor:pointer;
  box-shadow:0 8px 20px rgba(216,134,162,.4);
}


/* Sparkles */

.sparkle {
  position:absolute;
  color:white;
  font-size:20px;
  animation: sparkle 2s infinite;
}

@keyframes sparkle {
  0% {opacity:0; transform:scale(.5);}
  50% {opacity:1;}
  100% {opacity:0; transform:scale(1.5);}
}

</style>

</head>

<body>

<div class="container">

<h1>You’ve Got Mail 💌</h1>

<p>A little surprise awaits...</p>


<div class="envelope" onclick="openMail(this)">
  
<div class="flap"></div>

<div class="letter">
  Zoe's Invitation ✨
</div>

</div>


<button class="tap" onclick="openMail(document.querySelector('.envelope'))">
Tap to Open 💗
</button>


</div>


<script>

function openMail(el){

el.classList.add("open");

setTimeout(function(){

alert("Welcome to Zoe's special celebration 💕");

},1200);

}

</script>


</body>
</html># ZoeBorntoBLaze