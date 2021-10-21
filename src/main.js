console.log("This is  a strange and wierd error message.")
let hurtWord = ["Ouch", "It's hurt!", "I am going to cry", "Why you doing this to me?", "Are we stil friend, Right?","DO NOT DO THIS", "I will revenge"]
document.getElementById("bt1").addEventListener("click", function(){
    document.getElementById("hw").innerText = hurtWord[getRandomInt(0, hurtWord.length)]
    document.body.style.backgroundColor=getRandomColor()
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}