alert('ggg');
// matrix
ctx.fillRect(0, 0, 128, 128);
ctx.fillRect(128, 0, 128, 128);
ctx.fillRect(256, 0, 128, 128);
ctx.fillRect(384, 0, 128, 128);

//onload page == pencil
document.body.onload = function(e) {
    let tool = document.querySelector('ul li');
    tool.innerText == "Pencil";
    tool.style.backgroundColor = "red";
    pencil();
    
}

//choose by keyboard
document.addEventListener('keydown', function(e) {
    //console.log(e.code);
    if( e.target.code == 'KeyP') {
        document.querySelector('.tools li').style.backgroundColor = "red";
        pencil();
    } else if (e.target.code == 'KeyB') {
        e.target.style.backgroundColor = "red";
        paintBucket();
    } else if (e.code == 'KeyC') {
        e.target.style.backgroundColor = "red";
        chooseColor();
    } else {
        return;
     }

  });

// tools
const tools = document.getElementsByClassName('tools')[0]; //выбрать панель меню для переключения инструментов

document.querySelector('ul').onclick = function(e) { //подсветить выбранный инструмент
    document.querySelectorAll('li').forEach(function(li) {
        li.style.backgroundColor = '';
    });

    let tool = e.target;
    tool.style.backgroundColor = "red";

    if (e.target.innerText == "Paint bucket") {
        document.querySelector("*").style.cursor = "url(http://www.rw-designer.com/cursor-extern.php?id=24051)";
        paintBucket();

    } else if (e.target.innerText == "Choose color") {
        document.querySelector("*").style.cursor = "pointer";
        chooseColor();
    } else if (e.target.innerText == "Pencil" || e.target.innerText == "Current color") {
        document.querySelector("*").style.cursor = "pointer";
        pencil();
    } 

}

    function chooseColor(){
        const paletteMenu = document.querySelectorAll('.palette li'); 

        paletteMenu[0].onclick = function() { 
            document.getElementById('palette').style.display = "block";
            document.getElementById('palette').onclick = function(e) { 
                document.getElementsByClassName('prev')[0].style.backgroundColor = getComputedStyle(document.getElementsByClassName('current')[0]).backgroundColor;
                document.getElementsByClassName('current')[0].style.backgroundColor = getComputedStyle(e.target).backgroundColor; 
            }
        }
    };

    function  paintBucket() {
        canvas.onclick = function(e) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundColor = document.getElementsByClassName('current')[0].style.backgroundColor;
        }
    }

    function pencil(){
        document.getElementsByClassName('current')[0].style.backgroundColor = "grey";
        canvas.onclick = function(e) { 
            let x = e.offsetX;
            let y = e.offsetY;

            let lineX1 = 128;   let lineY1 = 128;
            let lineX2 = 256;   let lineY2 = 256;
            let lineX3 = 384;   let lineY3 = 384;
            let lineX4 = 512;   let lineY4 = 512;

            if( x < lineX1) {
                if ( y < lineY1) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(0, 0, lineX1, lineY1);
                } else if (y > lineY1 && y < lineY2) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(0, lineX1, lineX1, lineY1);  
                } else if (y > 256 && y < 384) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(0, 256, lineX1, lineY1);  
                } else if (y > lineY3 && y < lineY4) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(0, lineY3, lineX1, lineY1);  
                }     
            } else if( x > lineX1 && x < lineX2) {
                if ( y < lineY1) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(128, 0, lineX1, lineY1);
                } else if (y > lineY1 && y < lineY2) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(128, lineX1, lineX1, lineY1);  
                } else if (y > 256 && y < 384) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(128, 256, lineX1, lineY1);  
                } else if (y > lineY3 && y < lineY4) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(128, lineY3, lineX1, lineY1);  
                }  
            } else if ( x > lineX2 && x < lineX3) {
                if ( y < lineY1) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX2, 0, lineX1, lineY1);
                } else if (y > lineY1 && y < lineY2) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX2, lineX1, lineX1, lineY1);  
                } else if (y > 256 && y < 384) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX2, 256, lineX1, lineY1);  
                } else if (y > lineY3 && y < lineY4) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX2, lineY3, lineX1, lineY1);  
                } 
             }  else if ( x > lineX3 && x < lineX4) {
                if ( y < lineY1) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX3, 0, lineX1, lineY1);
                } else if (y > lineY1 && y < lineY2) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX3, lineX1, lineX1, lineY1);  
                } else if (y > 256 && y < 384) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX3, 256, lineX1, lineY1);  
                } else if (y > lineY3 && y < lineY4) {
                    ctx.fillStyle = document.getElementsByClassName('current')[0].style.backgroundColor;
                    ctx.fillRect(lineX3, lineY3, lineX1, lineY1);  
                } 
             } 
         };
    };
