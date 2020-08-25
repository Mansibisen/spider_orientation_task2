var counter = 0
var count = {
    count1:0,
    count2 :{
        0:0,1:0,2:0,3:0,5:0,6:0,4:0,7:0,8:0,9:0
    },
    count3:0,
    username : "username",
    total : 0,
}
var container =document.getElementById("container")
var innerContainer ={ inner : null}
var score = {
    0:0,1:0,2:0,3:0,5:0,6:0,4:0,7:0,8:0,9:0
}
var selector = document.getElementById("selector")

var connector = document.getElementById("connection")
var yourans2 = {
    0:null,1:null,2:null,3:null,5:null,6:null,4:null,7:null,8:null,9:null
}
// get the name of user
/*function  getname(value){
    document.getElementById("name").value = value
    var x = document.getElementById("name").value
    count.username = x
    
}*/
function givename(){
    var text = prompt("Enter your name to procedd")
    console.log(text)
    if (text === null || text ===""){
        givename()
    }else{
    count.username = text}

}



//question and answer set
var data = [
    {
        question:"Which of the following statement is/are correct about Favipiravir?",
        options:["Favipiravir is an antiviral COVID-19 drug.","Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.",
    "It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.","All the above are correct"],
        correctans:"D"
    },
    {
        question:"How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
        options:["More than 50","More than 100","More than 150","More than 200"],
        correctans:"D"
    },
    {
        question:"Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
        options:["Monkeys","Lizards","Hens","Kites"],
        correctans:"A"
    },
    {
        question:"In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?",
        options:["P-cell","D-Cell","T-Cell","Endothelial Cells"],
        correctans:"C"
    },
    {
        question:" Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",
        options:[ "BNT162" ,"PICOVACC" ,"Both A and B","Neither A nor B"],
        correctans:"A"
    },
    {
        question:"Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
        options:[" Plasma Therapy","Solidarity","Remdesivir","Hydroxychloroquine"],
        correctans:"A"
    },
    {
        question:"How does Coronavirus transmit?",
        options:["When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.",
    " If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.",
" If the distance is less than 1 meter from the infected person.",
"All the above are correct."],
        
        correctans:"D"
    },
    {
        question:"In which age group the COVID-19 spreads?",
        options:["COVID-19 occur in all age groups.","Coronavirus infection is mild in children.","Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.",
        "All the above are correct,"],
        correctans:"D"
    },
    {
        question:"What is Coronavirus?",
        options:["It is a large family of viruses.","It belongs to the family of Nidovirus.","Both A and B are correct","Only A is correct."],
        correctans:"C"
    },
    {
        question:"The first case of novel coronavirus was identified in .....",
        options:["Beijing","Shanghai","Wuhan, Hubei","Tianjin"],
        correctans:"C"
    }
]
//for randomizing the question sequence
function shuffle(array){
     
    for (let i = array.length -1 ; i>0 ;i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array
}
shuffle(data)


//printing first question on load
function getfirstquestion(){
    
        
        
        innerContainer.inner =  document.createElement("div")
        var para = document.createElement("p")
        var node = document.createTextNode(data[0].question)
        para.style.fontSize = "40px"
        var lst = ["A","B","C","D"]
        para.appendChild(node)
        innerContainer.inner.appendChild(para)
        for(i=0;i<4;i++){
            var radioOption = data[0].options[i]
            var label = document.createElement("label")
            var optiondata = document.createTextNode(radioOption)
            label.appendChild(optiondata)
            label.htmlFor = "options"+i
            var breakit = document.createElement("br")
            var radiobox = document.createElement("input")
            radiobox.type = "radio"
            radiobox.id="options"+i
            radiobox.name= "questag"+0
            radiobox.value = lst[i]
            label.style.fontSize="25px"
            
            innerContainer.inner.appendChild(radiobox)
            innerContainer.inner.appendChild(label)
            innerContainer.inner.appendChild(breakit)
            container.appendChild(innerContainer.inner)
        }
        timerForEach()

}
getfirstquestion()
// overall result of test
function endtest(){
    innerContainer.inner.remove();
        innerContainer.inner =  document.createElement("div")
        count.count3 = 1
        var total = 0
        for (var i = 0 ; i<10;i++){
            total = total + score[i]
}

        var text = document.createTextNode("SCORE")
        var header1 = document.createElement("h1")
        var nameheader = document.createElement("h1")
        var content = document.createTextNode("hey  "+count.username+"  this is your score")
        
        nameheader.appendChild(content)
        header1.appendChild(text)
        var header3 = document.createElement("h1")
        var correctQuestion= document.createElement("h1")
        var breakit = document.createElement("br")
        var ratio = document.createElement("h1")
        var timeSpent = document.createElement("h1")
        header3.style.textAlign="center"
        ratio.style.textAlign="center"
        header1.style.textAlign = "center"
        header1.style.color = "red"
        nameheader.style.textAlign = "center"
        correctQuestion.style.textAlign ="center"
        timeSpent.style.textAlign = "center"
        
        var toalText = document.createTextNode(total)
        var totalcorrect= document.createTextNode("No. of questions correct :"+total)
        var correctRatio= document.createTextNode("Wrong to correct ratio :"+((10-total)/total).toFixed(2))
        var caltime= 2.00 -(Number(minutes.innerHTML)+(Number(seconds.innerHTML)/100))
        var n = caltime.toFixed(2)
        var ts = 120 - ((Number(minutes.innerHTML))*60 + Number(seconds.innerHTML))
        console.log(ts)
        console.log(Number(minutes.innerHTML))
        console.log(Number(seconds.innerHTML))
        var m = checkin(parseInt(ts / 60));
        var s = checkin(parseInt(ts % 60))
       
        var time = document.createTextNode("time spent:---"+m+":"+s)
        header3.appendChild(toalText)
        ratio.appendChild(correctRatio)
        correctQuestion.appendChild(totalcorrect)
        timeSpent.appendChild(time)
        innerContainer.inner.appendChild(header1)
        innerContainer.inner.appendChild(breakit)
        innerContainer.inner.appendChild(nameheader)
        innerContainer.inner.appendChild(breakit)
        innerContainer.inner.appendChild(header3)
        innerContainer.inner.appendChild(correctQuestion)
        innerContainer.inner.appendChild(ratio)
        innerContainer.inner.appendChild(timeSpent)

        localSaved (total)
        container.appendChild(innerContainer.inner)
        minutes.remove()
    seconds.remove()
   previous.remove()
    next.remove()
   submit.remove()
   selector.remove()
   
   connector.remove()
}
// to get next question
function getnextquestion(){
    
    if (count.count1 < 9){
        count.count1++
        question()
        timerForEach()
        if (count.count2[count.count1] === 1){
            var showcolor = document.querySelector('label[for ='+yourans2[count.count1].id+']')
            if (score[count.count1] === 1){
            showcolor.style.backgroundColor = "#98fb98";
 
            }else{
             showcolor.style.backgroundColor = "#f0908f";
 
            }
        }
    }else{
        //message for showing result
        alert("already at last question")
    }
}
//to get previous question
function getpreviousquestion(){
    //code for previous
    
    if (count.count1 > 0){
        count.count1 = count.count1 - 1
        question()
       timerForEach()
       if (count.count2[count.count1] === 1){
           var showcolor = document.querySelector('label[for ='+yourans2[count.count1].id+']')
           if (score[count.count1] === 1){
           showcolor.style.backgroundColor = "#98fb98";

           }else{
            showcolor.style.backgroundColor = "#f0908f";

           }
       }
}
    else{
        alert("already at first question");
    }
}
// submitting the individual answer
function submitAnswer(){
    
    //check the answer 
    if (count.count2[count.count1] === 0){
    var rightans = data[count.count1].correctans
    count.count2[count.count1] = 1
    var yourans = document.querySelector('input[name =questag'+count.count1+']:checked').value;
    yourans2[count.count1] = document.querySelector('input[name =questag'+count.count1+']:checked')
    var yourid = document.querySelector('input[name =questag'+count.count1+']:checked').id
    var selectedInput = document.querySelector('label[for ='+yourid+']')
    var tagged = document.getElementById(count.count1)
    tagged.style.backgroundColor = "orange"
    if (rightans === yourans){
        //show green
        selectedInput.style.backgroundColor = "#98fb98";
        score[count.count1] = 1
    }
    else {
        //red and green 
        score[count.count1] = 0
        selectedInput.style.backgroundColor = "#f0908f";
    }
count.total = count.total +1
if (count.total === 10){
    endtest()
}
}
    else{
        
        alert("already submitted")
    }
}

//timer 
var minutes = document.getElementById("minute");
 var seconds = document.getElementById("seconds");
 var totalSecond = 120;
 timer=setInterval(setTime, 1000);

 function setTime() {
   totalSecond = totalSecond-1
   seconds.innerHTML = checkin(totalSecond % 60);
   minutes.innerHTML = checkin(parseInt(totalSecond / 60));
 }

 function checkin(val) {
   var valString = val + "";
   if (valString.length < 2) {
     return "0" + valString;
   } else {
     return valString;
  }
 }
 setTimeout(function () {
    // after 2 seconds
    if (count.count3 === 0){
    endtest()}
    
 }, 123000)
 
 //localstorage
 function compareScore(a,b){
    if(a.score> b.score){
           return -1
       }else{
           return 1 
       }
   }

 function localSaved (a){
    if (typeof(Storage) !== "undefined") {
        var array2 = localStorage.getItem("array2");
        array2 = (array2) ? JSON.parse(array2) : [];
        var bestscore  = document.createElement("h1")
        var labelofbest = document.createElement("h1")
        var bestcontent = document.createTextNode("Best score")
        labelofbest.appendChild(bestcontent)
        bestscore.style.textAlign = "center"
        labelofbest.style.color = "red"
        labelofbest.style.textAlign = "center"
        
        if (array2.length<=5){
        var obtainedscore ={
             name:count.username,
             score:a
         }
        array2.push(obtainedscore);
        array2.sort(compareScore)
         localStorage.setItem("array2", JSON.stringify(array2));
         var z = array2[0]
          bestscore.innerHTML =  z.name + ":" + z.score;
         
        }else{
          var obtainedscore ={
            name:count.username,
            score:a
        }
       array2.push(obtainedscore);
       array2.sort(compareScore) 
         array2.splice(4);
          localStorage.setItem("array2", JSON.stringify(array2));
          var z = array2[0]
         bestscore.innerHTML =  z.name + ":" + z.score;
         
         }
         innerContainer.inner.appendChild(labelofbest)
         innerContainer.inner.appendChild(bestscore)
      } else {
        bestscore.innerHTML = "Sorry, your browser does not support Web Storage...";
      } 
 }
// for respective question
function  getrespectivequestion(){
    var choosenquestion = document.getElementById("selector").value
    count.count1 = Number(choosenquestion)
    question()
    timerForEach()

}
// timer for each question 
function timerForEach() {
    var timelabel = document.createElement("span")
    var timecontent = document.createTextNode("Time spent on this question :--")
    var minulabel = document.createElement("label")
    var secondslabel= document.createElement("label")
    var divider = document.createElement("label")
    divider.appendChild(document.createTextNode(":"))
    timelabel.appendChild(timecontent)
    timelabel.style.fontSize = "40px";
    minulabel.style.fontSize = "40px";
    secondslabel.style.fontSize = "40px";
    divider.style.fontSize = "40px";
    minulabel.style.color = "red";
    secondslabel.style.color = "red";
    divider.style.color = "red";
    var givenseconds = 0 
    setInterval(timegiven,1000)
    function timegiven () {
        givenseconds++
        secondslabel.innerHTML = checkin(givenseconds % 60);
        minulabel.innerHTML = checkin(parseInt(givenseconds / 60));

    } 
    innerContainer.inner.appendChild(document.createElement("br"))
    innerContainer.inner.appendChild(document.createElement("br"))
    innerContainer.inner.appendChild(document.createElement("br"))
    innerContainer.inner.appendChild(timelabel)
    innerContainer.inner.appendChild(minulabel)
    innerContainer.inner.appendChild(divider)
    innerContainer.inner.appendChild(secondslabel)

}


// getting the question
function question (){
    innerContainer.inner.remove();
        innerContainer.inner =  document.createElement("div")
        //count.count1++
        var para = document.createElement("p")
        var node = document.createTextNode(data[count.count1].question)
        para.style.fontSize = "40px"
        var lst = ["A","B","C","D"]
        para.appendChild(node)
        innerContainer.inner.appendChild(para)
        for(i=0;i<4;i++){
            var radioOption = data[count.count1].options[i]
            var label = document.createElement("label")
            var optiondata = document.createTextNode(radioOption)
            label.appendChild(optiondata)
            label.htmlFor = "options"+i
            var breakit = document.createElement("br")
            var radiobox = document.createElement("input")
            radiobox.type = "radio"
            radiobox.id="options"+i
            radiobox.name= "questag"+count.count1
            radiobox.value = lst[i]
            label.style.fontSize="25px"
            innerContainer.inner.appendChild(radiobox)
            innerContainer.inner.appendChild(label)
            innerContainer.inner.appendChild(breakit)
            container.appendChild(innerContainer.inner)
}}








//event listeners
var previous = document.getElementById("btn")
var next = document.getElementById("btn2")
var submit = document.getElementById("btn3")
previous.addEventListener("click",getpreviousquestion)
next.addEventListener("click",getnextquestion)
submit.addEventListener("click",submitAnswer)