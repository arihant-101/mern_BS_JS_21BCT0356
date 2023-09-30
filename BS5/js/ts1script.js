function reverse_a_number()
{
    var num=32243;
    document.getElementById("var1").innerHTML=num;
    let reversed_num = 0;
    while (num !== 0) {
      reversed_num = reversed_num * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    
    document.getElementById("var2").innerHTML=reversed_num;
   
  }
  
  