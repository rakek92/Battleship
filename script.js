
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
                    near.push(document.getElementById(+this.id-11))
                    near.push(document.getElementById(+this.id-10))
                    near.push(document.getElementById(+this.id-9))
                    near.push(document.getElementById(+this.id-1))
                    near.push(document.getElementById(+this.id+1))
                    near.push(document.getElementById(+this.id+9))
                    near.push(document.getElementById(+this.id+11))
                    near.push(document.getElementById(+this.id+19))
                    near.push(document.getElementById(+this.id+21))
                    near.push(document.getElementById(+this.id+29))
                    near.push(document.getElementById(+this.id+31))
                    near.push(document.getElementById(+this.id+39))
                    near.push(document.getElementById(+this.id+40))
                    near.push(document.getElementById(+this.id+41))
                        for(var i=0;i<near.length;i++){
                            near[i].nearShip=true;
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
                if(this.nearShip!==true&&second.nearShip!==true&&third.nearShip!==true){
                    near.push(document.getElementById(+this.id-11))
                    near.push(document.getElementById(+this.id-10))
                    near.push(document.getElementById(+this.id-9))
                    near.push(document.getElementById(+this.id-1))
                    near.push(document.getElementById(+this.id+1))
                    near.push(document.getElementById(+this.id+9))
                    near.push(document.getElementById(+this.id+11))
                    near.push(document.getElementById(+this.id+19))
                    near.push(document.getElementById(+this.id+21))
                    near.push(document.getElementById(+this.id+29))
                    near.push(document.getElementById(+this.id+30))
                    near.push(document.getElementById(+this.id+31))
                    
                        for(var i=0;i<near.length;i++){
                            near[i].nearShip=true;
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
                near.push(document.getElementById(+this.id-11))
                near.push(document.getElementById(+this.id-10))
                near.push(document.getElementById(+this.id-9))
                near.push(document.getElementById(+this.id-1))
                near.push(document.getElementById(+this.id+1))
                near.push(document.getElementById(+this.id+9))
                near.push(document.getElementById(+this.id+11))
                near.push(document.getElementById(+this.id+19))
                near.push(document.getElementById(+this.id+20))
                near.push(document.getElementById(+this.id+21))
                               
                    for(var i=0;i<near.length;i++){
                        near[i].nearShip=true;
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
function ranking1g(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onmouseover=null;
            square[i].onclick= function makeCounter(){
                
            if (counter<4){ 
                this.className='square ship';
                this.ship=true;
                counter++;    
                console.log(counter)
            }
        }
    }
}



