var loadquize = [
    {quetion:"HTML Full From ?",
    opation:["java script", "casading style sheet", "React Componet arow fuction","hyper text markup languge"],curect:3},

    {quetion:" full From Css ?",
    opation:["java script", "casading style sheet", "react js","hyper text markup languge"]
    ,curect:1},

    {quetion:"Full From Js ?",
    opation:["casceding", "java script", "react js","hyper text markup languge"],
    curect:1},
    {quetion:"Full From GSAP ?",
    opation:["locomotive", "casading style sheet", "geern sock animetion ","hyper text markup languge"],
    curect:2},

    {quetion:"Java Script developed by ?",
    opation:["Cretime", "Acema rai", "Din joj","Brendan Eich"],curect:3},
];

var main = document.querySelector("#contaiiner");
var anserEle = document.querySelectorAll(".anser");
var [que1 , opa_1, opa_2,opa_3 ,opa_4  ] = document.querySelectorAll("#quetions ,#a ,#b ,#c ,#d ");

var btn = document.querySelector("#nextbtn");

var  score = 0;  


var quize = 0;



var loaded = ()=>{


    var {quetion, opation} = loadquize[quize]

    que1.innerHTML = ` ${quize +1 } ${quetion}` 
    

    opation.forEach(function(e,i){


        window[`opa_${i+1}`].innerHTML = e

    })
 

};


var anserload = ()=>{

    var ans;
anserEle.forEach(function(current,indexs){


    if(current.checked){

        ans = indexs;
    }

  


});

return ans;
};


function dissecet(){
    anserEle.forEach(function(e){


        e.checked = false

    })

}


btn.addEventListener("click",function(){


    var le = anserload();
    if(le  === loadquize[quize].curect){
        
        score += 1;
        
        
    }
    quize++;
    dissecet()

    
    if( quize < loadquize.length){
        
        loaded();


}else{

    console.log(score);

    main.innerHTML  = `<div id="scorediv" > <span id="scor">${score}</span>  Your Are Score</div><br>
    <button  onclick = "location.reload()">Play Now</button>`
}

})


loaded();



