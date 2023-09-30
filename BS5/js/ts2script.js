function alphabet_order()
  {
    str="webmaster";
    document.getElementById("var1").innerHTML=str;
    document.getElementById("var2").innerHTML=str.split('').sort().join('');

  }
