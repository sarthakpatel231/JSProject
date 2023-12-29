 let rect=document.querySelector('#center');
 rect.addEventListener("mousemove",function(details){
   let rectanglelocation=rect.getBoundingClientRect();
   let insiderectval=details.clientX-rectanglelocation.left;
 
 });
 
  