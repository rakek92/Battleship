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
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onclick= function makeCounter(){
            if (counter<1){ 
                var second=document.getElementById(+this.id+10);
                var third=document.getElementById(+this.id+20);
                var fourth=document.getElementById(+this.id+30);
                this.className='square ship';
                this.ship=true;
                second.className='square ship';
                second.ship=true;
                third.className='square ship';
                third.ship=true;
                fourth.className='square ship';
                fourth.ship=true;
                counter++;    
                console.log(counter)
            }
        }
    }
}

function ranking3(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onclick= function makeCounter(){
            if (counter<2){ 
                var second=document.getElementById(+this.id+10);
                var third=document.getElementById(+this.id+20);
                this.className='square ship';
                this.ship=true;
                second.className='square ship';
                second.ship=true;
                third.className='square ship';
                third.ship=true;
                counter++;    
                console.log(counter)
            }
        }
    }
}
function ranking2(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onclick= function makeCounter(){
            if (counter<3){ 
                var second=document.getElementById(+this.id+10);
                this.className='square ship';
                this.ship=true;
                second.className='square ship';
                second.ship=true;
                counter++;    
                console.log(counter)
            }
        }
    }
}
function ranking1(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onclick= function makeCounter(){
            if (counter<1){ 
                this.className='square ship';
                this.ship=true;
                counter++;    
                console.log(counter)
            }
        }
    }
}
function ranking4g(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onclick= function makeCounter(){
            if (counter<1){ 
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
                counter++;    
                console.log(counter)
            }
        }
    }
}

function ranking3g(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onclick= function makeCounter(){
            if (counter<2){ 
                var second=document.getElementById(+this.id+1);
                var third=document.getElementById(+this.id+2);
                this.className='square ship';
                this.ship=true;
                second.className='square ship';
                second.ship=true;
                third.className='square ship';
                third.ship=true;
                counter++;    
                console.log(counter)
            }
        }
    }
}
function ranking2g(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
            square[i].onclick= function makeCounter(){
            if (counter<3){ 
                var second=document.getElementById(+this.id+1);
                this.className='square ship';
                this.ship=true;
                second.className='square ship';
                second.ship=true;
                counter++;    
                console.log(counter)
            }
        }
    }
}
function ranking1g(){//debugger
    var counter=0;
    
        square=document.getElementsByClassName('square');
        for (var i=0; i<square.length;i++){
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
