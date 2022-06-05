/*
https://teachablemachine.withgoogle.com/models/TVXP5TeJk/
*/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TVXP5TeJk/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }else{
        console.log("got result");
        console.log(results); 
        
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_underscore_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_underscore_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(3)+"%";
        
        img1=document.getElementById('alien_1');
        img2=document.getElementById('alien_2');
        img3=document.getElementById('alien_3');
        img4=document.getElementById('alien_4');

        if(results[0].label=="Clap"){
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(results[0].label=="Squeak"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(results[0].label=="Flute"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }
        else {
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }
   
}