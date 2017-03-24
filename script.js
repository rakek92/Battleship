
var rankingCounter={
    fourCount:0,
    threeCount:0,
    twoCount:0,
    }
function Square(){
    this.opened=false;
    this.ship=null;
}
function Array(){
    var arr=[], id=0;
    for (var i=0;i<10;i++){
        arr[i]=[];
        for(var j=0;j<10;j++){
            arr[i][j]=new Square();
            var square=document.createElement('div');
            square.className='square';
            square.id=id;
            id++
            var field1= document.getElementsByClassName('field1');
            field1[0].appendChild(square);
        }
    }
    return arr;
}

console.table(Array())
function ranking4(){//debugger
    var background='background-color:grey';
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover= function(){
               var second=document.getElementById(+this.id+10);
               var third=document.getElementById(+this.id+20);
               var fourth=document.getElementById(+this.id+30);
              
                   second.style.cssText= background;
                   third.style.cssText= background;
                   fourth.style.cssText= background;
              
            }

            square[i].onmouseout= function(){
               var second=document.getElementById(+this.id+10);
               var third=document.getElementById(+this.id+20);
               var fourth=document.getElementById(+this.id+30);
               second.style.cssText= '';
               third.style.cssText='';
               fourth.style.cssText='';

            }
            square[i].onclick= function makeCounter(){
            if (rankingCounter.fourCount<1){ 

                var second=document.getElementById(+this.id+10);
                var third=document.getElementById(+this.id+20);
                var fourth=document.getElementById(+this.id+30);
                var near=[];
                if(this.nearShip!==true&&second.nearShip!==true&&third.nearShip!==true&&fourth.nearShip!==true){
                    
                    near.push(document.getElementById(+this.id-10))
                    /*---------------------right side--------------*/
                    if (this.id!='9'&&this.id!='19'&&this.id!='29'&&this.id!='39'&&this.id!='49'&&this.id!='59'&&this.id!='69'&&this.id!='79'&&this.id!='89'&&this.id!='99'){
                    near.push(document.getElementById(+this.id-9))
                    near.push(document.getElementById(+this.id+1))
                    near.push(document.getElementById(+this.id+11))
                    near.push(document.getElementById(+this.id+21))
                    near.push(document.getElementById(+this.id+31))
                    near.push(document.getElementById(+this.id+41))
                    }
                    /*--------------------right side--------------*/
                    /*--------------------left side--------------*/
                    if (+this.id%10!=0){
                    near.push(document.getElementById(+this.id-11))
                    near.push(document.getElementById(+this.id-1))
                    near.push(document.getElementById(+this.id+9))
                    near.push(document.getElementById(+this.id+19))
                    near.push(document.getElementById(+this.id+29))
                    near.push(document.getElementById(+this.id+39))
                    }
                    near.push(document.getElementById(+this.id+40))
                    
                        for(var i=0;i<near.length;i++){
                            if(near[i]){
                            near[i].nearShip=true;}
                        }

                    console.log(near)

                
                this.className='square ship';
                this.ship=true;
                
                second.className='square ship';
                second.ship=true;
                third.className='square ship';
                third.ship=true;
                fourth.className='square ship';
                fourth.ship=true;
                rankingCounter.fourCount++;    
               } 
            }
        }
    }
}

function ranking3(){//debugger
    var counter=0;
    var background='background-color:grey';
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover= function(){
               var second=document.getElementById(+this.id+10);
               var third=document.getElementById(+this.id+20);
               
                   second.style.cssText= background;
                   third.style.cssText= background;
                
            }

            square[i].onmouseout= function(){
               var second=document.getElementById(+this.id+10);
               var third=document.getElementById(+this.id+20);
               second.style.cssText= '';
               third.style.cssText='';
            }
            square[i].onclick= function makeCounter(){
            if (rankingCounter.threeCount<2){ 
                var second=document.getElementById(+this.id+10);
                var third=document.getElementById(+this.id+20);
                var near=[];
                if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&third.nearShip!==true){
                    
                     /*---------------------right side--------------*/
                    if (this.id!='9'&&this.id!='19'&&this.id!='29'&&this.id!='39'&&this.id!='49'&&this.id!='59'&&this.id!='69'&&this.id!='79'&&this.id!='89'&&this.id!='99'){
                    near.push(document.getElementById(+this.id-9));
                    near.push(document.getElementById(+this.id+1));
                    near.push(document.getElementById(+this.id+11));
                    near.push(document.getElementById(+this.id+21));
                    near.push(document.getElementById(+this.id+31));
                    near.push(document.getElementById(+this.id-10));
                    }
                    /*--------------left side---------------------*/
                    if (+this.id%10!=0){
                    near.push(document.getElementById(+this.id-11));
                    near.push(document.getElementById(+this.id-1));
                    near.push(document.getElementById(+this.id+9));
                    near.push(document.getElementById(+this.id+19));
                    near.push(document.getElementById(+this.id+29));
                    }
                    near.push(document.getElementById(+this.id+30));
                    
                    
                        for(var i=0;i<near.length;i++){
                            if(near[i]){
                            near[i].nearShip=true;}
                        }

                    this.className='square ship';
                    this.ship=true;
                    second.className='square ship';
                    second.ship=true;
                    third.className='square ship';
                    third.ship=true;
                    rankingCounter.threeCount++;    
                    console.log(counter)
                }
            }
        }
    }
}
function ranking2(){//debugger
    var counter=0;
    var background='background-color:grey';
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover= function(){
               var second=document.getElementById(+this.id+10);
              
               
                second.style.cssText= background;
               
            }

            square[i].onmouseout= function(){
               var second=document.getElementById(+this.id+10);
               var third=document.getElementById(+this.id+20);
              
                second.style.cssText= '';
               
            }
            square[i].onclick= function makeCounter(){
            if (rankingCounter.twoCount<3){ 
                var second=document.getElementById(+this.id+10);
                var near=[];
                if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&second.ship!==true){
                    /*---------------right side--------------------*/
                    if (this.id!='9'&&this.id!='19'&&this.id!='29'&&this.id!='39'&&this.id!='49'&&this.id!='59'&&this.id!='69'&&this.id!='79'&&this.id!='89'&&this.id!='99'){
                    near.push(document.getElementById(+this.id-9));
                    near.push(document.getElementById(+this.id+1));
                    near.push(document.getElementById(+this.id+11));
                    near.push(document.getElementById(+this.id+21));
                    }
                    /*---------------left side--------------------*/
                    if (+this.id%10!=0){
                    near.push(document.getElementById(+this.id-11));
                    near.push(document.getElementById(+this.id-1));
                    near.push(document.getElementById(+this.id+9));
                    near.push(document.getElementById(+this.id+19));
                    }
                    near.push(document.getElementById(+this.id+20));
                    
                               
                    for(var i=0;i<near.length;i++){
                        if(near[i]){
                        near[i].nearShip=true;}
                    }
                    this.className='square ship';
                    this.ship=true;
                    second.className='square ship';
                    second.ship=true;
                    rankingCounter.twoCount++;    
                    console.log(counter)
                 }
            }
        }
    }
}
function ranking4g(){//debugger
    var counter=0;
    var background='background-color:grey';
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover= function(){
               var second=document.getElementById(+this.id+1);
               var third=document.getElementById(+this.id+2);
               var fourth=document.getElementById(+this.id+3);
               second.style.cssText= background;
               third.style.cssText= background;
               fourth.style.cssText= background;
            }

            square[i].onmouseout= function(){
               var second=document.getElementById(+this.id+1);
               var third=document.getElementById(+this.id+2);
               var fourth=document.getElementById(+this.id+3);
               second.style.cssText= '';
               third.style.cssText='';
               fourth.style.cssText='';

            }
            square[i].onclick= function makeCounter(){
            if (rankingCounter.fourCount<1){ 
                var second=document.getElementById(+this.id+1);
                var third=document.getElementById(+this.id+2);
                var fourth=document.getElementById(+this.id+3);
                var near=[];
                if (fourth.id[0]==this.id[0]||third.id.length==1){
                    if(this.nearShip!==true&&second.nearShip!==true&&third.nearShip!==true&&fourth.nearShip!==true){
                        if (this.id!='6'&&this.id!='16'&&this.id!='26'&&this.id!='36'&&this.id!='46'&&this.id!='56'&&this.id!='66'&&this.id!='76'&&this.id!='86'&&this.id!='96'){
                          near.push(document.getElementById(+this.id+4))
                          near.push(document.getElementById(+this.id-6))
                          near.push(document.getElementById(+this.id+14))
                          } 
                        if (+this.id%10!=0){
                            near.push(document.getElementById(+this.id-11))
                            
                            near.push(document.getElementById(+this.id-1))
                            near.push(document.getElementById(+this.id+9))
                            }
                        near.push(document.getElementById(+this.id-9))
                        near.push(document.getElementById(+this.id-10))
                        near.push(document.getElementById(+this.id-8))
                        near.push(document.getElementById(+this.id-7))
                        
                        
                        near.push(document.getElementById(+this.id+10))
                        near.push(document.getElementById(+this.id+11))
                        near.push(document.getElementById(+this.id+12))
                        near.push(document.getElementById(+this.id+13))
                        
                            for(var i=0;i<near.length;i++){
                                if(near[i]){
                                near[i].nearShip=true;}
                            }

                        this.className='square ship';
                        this.ship=true;
                        second.className='square ship';
                        second.ship=true;
                        third.className='square ship';
                        third.ship=true;
                        fourth.className='square ship';
                        fourth.ship=true;
                        rankingCounter.fourCount++;    
                        console.log(counter)
                    }
                 }
            }
        }
    }
}

function ranking3g(){//debugger
    var counter=0;
    var background='background-color:grey';
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover= function(){
               var second=document.getElementById(+this.id+1);
               var third=document.getElementById(+this.id+2);
               second.style.cssText= background;
               third.style.cssText= background;
            }

            square[i].onmouseout= function(){
               var second=document.getElementById(+this.id+1);
               var third=document.getElementById(+this.id+2);
               second.style.cssText= '';
               third.style.cssText='';
            }
            square[i].onclick= function makeCounter(){
            if (rankingCounter.threeCount<2){ 
                var second=document.getElementById(+this.id+1);
                var third=document.getElementById(+this.id+2);
                var near=[];
                    if (third.id[0]==this.id[0]||third.id.length==1){
                        if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&third.nearShip!==true){
                            if (this.id!='7'&&this.id!='17'&&this.id!='27'&&this.id!='37'&&this.id!='47'&&this.id!='57'&&this.id!='67'&&this.id!='77'&&this.id!='87'&&this.id!='97'){
                                near.push(document.getElementById(+this.id-7));
                                near.push(document.getElementById(+this.id+3));
                                near.push(document.getElementById(+this.id+13));
                            }
                            if (+this.id%10!=0){
                                near.push(document.getElementById(+this.id-11));
                                near.push(document.getElementById(+this.id-1));
                                near.push(document.getElementById(+this.id+9));
                            }
                                near.push(document.getElementById(+this.id-10));
                                near.push(document.getElementById(+this.id-9));
                                near.push(document.getElementById(+this.id-8));
                            
                            
                            
                            
                            near.push(document.getElementById(+this.id+10));
                            near.push(document.getElementById(+this.id+11));
                            near.push(document.getElementById(+this.id+12));
                            
                            
                                for(var i=0;i<near.length;i++){
                                    if(near[i]){
                                    near[i].nearShip=true;}
                                }
                            this.className='square ship';
                            this.ship=true;
                            second.className='square ship';
                            second.ship=true;
                            third.className='square ship';
                            third.ship=true;
                            rankingCounter.threeCount++;    
                            console.log(counter)
                    }
                }
            }
        }
    }
}
function ranking2g(){//debugger
    var counter=0;
    var background='background-color:grey';
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover= function(){
               var second=document.getElementById(+this.id+1);
                 second.style.cssText= background;
            }

            square[i].onmouseout= function(){
               var second=document.getElementById(+this.id+1);
               
               second.style.cssText= '';
            }
            square[i].onclick= function makeCounter(){
            if (rankingCounter.twoCount<3){ 
                var second=document.getElementById(+this.id+1);
                var near=[];
                if (second.id[0]==this.id[0]||second.id.length==1){
                    if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&second.ship!==true){
                        if (this.id!='8'&&this.id!='18'&&this.id!='28'&&this.id!='38'&&this.id!='48'&&this.id!='58'&&this.id!='68'&&this.id!='78'&&this.id!='88'&&this.id!='98'){
                            near.push(document.getElementById(+this.id-8));
                            near.push(document.getElementById(+this.id+2));
                            near.push(document.getElementById(+this.id+12));
                        }
                        if (+this.id%10!=0){
                            near.push(document.getElementById(+this.id-11));
                            near.push(document.getElementById(+this.id-1));
                            near.push(document.getElementById(+this.id+9));
                        }
                        near.push(document.getElementById(+this.id-10));
                        near.push(document.getElementById(+this.id-9));
                        near.push(document.getElementById(+this.id+10));
                        near.push(document.getElementById(+this.id+11));
                        
                                   
                        for(var i=0;i<near.length;i++){
                            if(near[i]){
                            near[i].nearShip=true;}
                        }
                        this.className='square ship';
                        this.ship=true;
                        second.className='square ship';
                        second.ship=true;
                        rankingCounter.twoCount++;    
                        console.log(counter)
                    }
                }
            }
        }
    }
}
function ranking1g(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover=null;
            square[i].onclick= function makeCounter(){
                
            if (counter<4){ 
                var near=[];
                if(this.nearShip!==true&&this.ship!==true){
                    if (this.id!='9'&&this.id!='19'&&this.id!='29'&&this.id!='39'&&this.id!='49'&&this.id!='59'&&this.id!='69'&&this.id!='79'&&this.id!='89'&&this.id!='99'){
                        near.push(document.getElementById(+this.id-9));
                        near.push(document.getElementById(+this.id+1));
                        near.push(document.getElementById(+this.id+11));
                    }
                    if (+this.id%10!=0){
                       near.push(document.getElementById(+this.id-1)); 
                        near.push(document.getElementById(+this.id-11));
                        near.push(document.getElementById(+this.id+9));
                    }
                    near.push(document.getElementById(+this.id-10));
                    near.push(document.getElementById(+this.id+10));
                    for(var i=0;i<near.length;i++){
                        if(near[i]){
                        near[i].nearShip=true;}
                    }
                    this.className='square ship';
                    this.ship=true;
                    counter++;    
                    console.log(counter)
              }
            }
        }
    }
}



