

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function inicio(){
    document.getElementById("textarea").innerHTML=""
    recognition.start()

}

recognition.onresult=function(event){
    var content=event.results[0][0].transcript
    console.log(content)
    speak()
}

function speak(){
    var sinth= window.speechSynthesis;
    var utterthis=new SpeechSynthesisUtterance(speakData);
    sinth.speak(utterthis)
    Webcam.attach(camera);
}

var camera= document.getElementById("camera")

Webcam.set({
    width: 320,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
