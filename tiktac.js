let boxes=document.querySelectorAll(".box");
let playx=true;
 let newbtn= document.querySelector(".newbtn");
 let reset= document.querySelector(".reset");
 let msg=document.querySelector(".msg");
 let msgcont=document.querySelector(".msg-cont");
 const winpattern = [
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6]
 ];
  boxes.forEach( (val)  =>  { 
   val.addEventListener("click",() => { 
  //  console.log("hyy button was clicked"); 
    if(playx)  {
      val.innerText="x";
      playx=false;
     
    } 
    else {
      val.innerText="o";
      playx=true;
      
    } 
     val.disabled=true;
     checkptn();
   });
});
   let disableB = () => {
        for ( let box of boxes)  {
          box.disabled=true;
        }
   }  
    let enableB= () => {
      for ( let box of boxes)  {
        box.disabled=false;
         box.innerText="";
      }
    }   
    
    let restgame = () => {  
      playx=true;
         enableB();  
         msgcont.classList.add("hide");
            
    };

  let verify =( winner) =>{
          msg.innerText= `congratulation u won the game ${winner} ` ;
          msgcont.classList.remove("hide");
          disableB();
  }
      
      /* newbtn.addEventListener( "click" , () =>  {
            console.log( " button wa clicked new" );
              enableB();   
            
      } );     */
      //check the answer
             let checkptn= () => {
   for ( let pattern of winpattern) { 
       let p1=( boxes[pattern[0]].innerText);
       let p2=( boxes[pattern[1]].innerText);
       let p3=( boxes[pattern[2]].innerText);
         if( p1 != "" && p2 != "" && p3 != "") {
           if( p1===p2 && p2===p3) {
             console.log ( "Congrates you won the game");
             verify(p1);
           }
         }
   }
  }  
     newbtn.addEventListener( "click", restgame); 
     reset.addEventListener( "click", restgame);