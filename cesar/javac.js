var c;
var a;
var b;
function convertir (a) 
  {
        palabra = '';
    
    for( var i in a ) 
   {
        c = a.charCodeAt(i);
     if( c >= 80 && c <= 90 )
        c = c + 39;
        palabra = palabra + String.fromCharCode(c);
   }
   return palabra;
  }
function doShift( a, b ) 
 {
        palabra= '';
    for( var i in a) 
    {
      c = a.charCodeAt(i);
      if( c >= 97 && c <= 122 )
        c = c + b;
      if(c > 122)
         c = c - 30;
      palabra = palabra + String.fromCharCode(c);
     }
    return palabra;
    
 }

