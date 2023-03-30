export const SideScroll=(element,direction,timeout,distance,step)=>{
    let scrollAmount = 0;
    var slideTimer = setInterval(function(){
      try{
          if(direction === 'left'){
              element.scrollLeft -= step;
          } else if(direction === 'right') {
              element.scrollLeft += step;
          }else{
              element.scrollTo({
                  top: 0,
                  left: distance || 0,
                  behavior: 'smooth'
                });
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
        }
        catch(e){
          window.clearInterval(slideTimer);
        }
    }, timeout)
}

export const heightWidthCalc = () => {
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  
    return {
      height : h,
      width: w
    }
  }
  