
function del1(){
    const num = document.getElementById("inpCal")
   let arr =  num.value
   let valye =  arr.slice(0, -1);
   console.log(valye);
    num.value = valye;
  
  }
  function clear12(){
    const num = document.getElementById("inpCal")
    num.value = " ";
  }
  function calculate (event){
   const num = document.getElementById("inpCal")
   console.log(event.target.value);
   num.value += event.target.value;
  }

  function getvalue() {
  const num = document.getElementById("inpCal")
      const value12 =  num.value;
const  result = eval(value12)
console.log(result);
num.value = result    
      
  }