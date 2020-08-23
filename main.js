var counter = 0
var count = {
    count1:0,
    count2 :{
        0:0,1:0,2:0,3:0,5:0,6:0,4:0,7:0,8:0,9:0
    }
}
var container =document.getElementById("container")
var innerContainer ={ inner : null}
var score = {
    0:0,1:0,2:0,3:0,5:0,6:0,4:0,7:0,8:0,9:0
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

function getfirstquestion(){
    
        
        // code for next
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

}
getfirstquestion()
function getnextquestion(){
    
    if (count.count1 < 9){
        
        innerContainer.inner.remove();
            


        
        // code for next
        innerContainer.inner =  document.createElement("div")
        count.count1++
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
        }

        
        
        

    }else{
        //message for showing result
        
        innerContainer.inner.remove();
        innerContainer.inner =  document.createElement("div")
        var text = document.createTextNode("SCORE")
        var header1 = document.createElement("h1")
        header1.appendChild(text)
        header1.style.textAlign = "center"
        var header3 = document.createElement("h1")
        var breakit = document.createElement("br")
        var total = 0
        for (var i = 0 ; i<10;i++){
            
            total = total + score[i]

        }
        var toalText = document.createTextNode(total)
        header3.appendChild(toalText)
        header3.style.textAlign="center"
        innerContainer.inner.appendChild(header1)
        innerContainer.inner.appendChild(breakit)
        innerContainer.inner.appendChild(breakit)
        innerContainer.inner.appendChild(header3)
        container.appendChild(innerContainer.inner)


    }


}
function getpreviousquestion(){
    //code for previous
    
    if (count.count1 > 0){
        count.count1 = count.count1 - 1
        
        innerContainer.inner.remove();
        innerContainer.inner = document.createElement("div")
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
            label.style.fontSize="25px"
            radiobox.value = lst[i]
            innerContainer.inner.appendChild(radiobox)
            innerContainer.inner.appendChild(label)
            innerContainer.inner.appendChild(breakit)
            container.appendChild(innerContainer.inner)

        }
}
    else{
        //error message of previous not allowed
    }
}
function submitAnswer(){
    
    //check the answer 
    if (count.count2[count.count1] === 0){
    var rightans = data[count.count1].correctans
    count.count2[count.count1] = 1
    var yourans = document.querySelector('input[name =questag'+count.count1+']:checked').value;
    var yourid = document.querySelector('input[name =questag'+count.count1+']:checked').id
    var selectedInput = document.querySelector('label[for ='+yourid+']')
    if (rightans === yourans){
        //show green
        selectedInput.style.backgroundColor = "green";
        score[count.count1] = 1
        
    }
    else {
        //red and green 
        score[count.count1] = 0
        selectedInput.style.backgroundColor = "red"
        
        
    }}
    else{
        
        alert("already submitted")
    }
}

//event listeners
var previous = document.getElementById("btn")
var next = document.getElementById("btn2")
var submit = document.getElementById("btn3")
previous.addEventListener("click",getpreviousquestion)
next.addEventListener("click",getnextquestion)
submit.addEventListener("click",submitAnswer)