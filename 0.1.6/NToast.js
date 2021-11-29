/*
*
* NToast
* version (v0.1.6)  
*
*/ 

let id = 0;let closeTime = 100;let c = 0;
 
var NToastLoaded=document.createElement("div");
NToastLoaded.classList.add("NToastJs-loaded"),document.body.appendChild(NToastLoaded);

function NToast ( bgColor, position, description, icon, costum_icon, progressbar, costumclosetime ){

  if(!costumclosetime){costumclosetime = 125;}
  if(window.innerWidth >= 500){
    "topright"!=position && "TopRight"!=position && "tr"!=position && "TR"!=position ||$(".NToastJs-loaded").css({left:"auto",top:"0",right:"0",bottom:"auto"}),
    "topleft"!=position && "TopLeft"!=position && "tl"!=position && "TL"!=position ||$(".NToastJs-loaded").css({left:"0",top:"0",right:"auto",bottom:"auto"}),
    "bottomright"!=position && "BottomRight"!=position && "br"!=position && "BR"!=position ||$(".NToastJs-loaded").css({left:"auto",top:"auto",right:"0",bottom:"0"}),
    "bottomleft"!=position && "BottomLeft"!=position && "bl"!=position && "BL"!=position ||$(".NToastJs-loaded").css({left:"0",top:"auto",right:"auto",bottom:"0"}); 
  }
  if(description.length >= 46){console.log("NToastJS - error! the description should not exceed 45 characters"); return false;}
  if(description.length >= 1)
  {
    var addicon;
    if(icon == true){addicon = "<span class='NToastJs-icon'><i class='fa fa-check'></i></span>";}
    else {addicon = ''}
    costum_icon.length>=2&&(addicon=addicon.replace("fa fa-check",costum_icon)),
    progressbar ? progress="<div class='NToastJs-progress' id='progress-"+id+"'></div>":progress="",id++;
    var NToastDiv = document.createElement("div");
    NToastDiv.classList.add("NToastJs")
    NToastDiv.setAttribute("id","Not-"+id)
    NToastDiv.style.backgroundImage = "linear-gradient("+bgColor+","+bgColor+")";
    if(bgColor.indexOf("blur") != -1)
    {
      NToastDiv.style.filter = "drop-shadow(0.5px 0px 1px "+bgColor.replace("blur","")+") ";
      NToastDiv.style.webkitFilter = "drop-shadow(0.5px 0px 1px "+bgColor.replace("blur","")+") ";
    }
    else
    {
      NToastDiv.style.filter = "drop-shadow(0px 0px 0px "+bgColor+") ";
      NToastDiv.style.webkitFilter = "drop-shadow(0px 0px 0px "+bgColor+") ";
    }
    NToastDiv.innerHTML="\
    "+addicon+"<div class='NToastJs-container'> <span class='NToastJs-text'>"+description+"</span> </div><span class='NToastJs-close' id='n-"+id+"'> x </span>"+progress+"";
    document.getElementsByClassName("NToastJs-loaded")[0].appendChild(NToastDiv);
    closeTime = 100;
    if(addicon ==''){document.getElementsByClassName("NToastJs-text")[0].classList.add("withouticon");}
    $(".NToastJs-close").click(function(){$("#Not-"+ $(this).attr("id").replace("n-","")  ).remove();})
    c = getfullnotifiamount();
    if(progressbar)
    {    
       setInterval(function(){
        if(closeTime > 0)
        {
 
          closeTime --;  
          $(".NToastJs-progress").css({"width":closeTime+"%"});

        }
        if(closeTime == 0)
        {

          $("#Not-"+c).remove();
          c --;
          if(c <= 1)
          {
            c = getfullnotifiamount();
            id = 0;
            clearintervals();
            if($("#Not-1"))
            {
              $("#Not-1").remove();
            }
          }
        }
      }, id*costumclosetime)
    }
    else
    {
      setInterval(function(){
        $("#Not-"+c).remove();
        c --;
        if(c == 0)
        {
          clearintervals();
        }
      }, c*costumclosetime)
    }
    getfullnotifiamount();
    function getfullnotifiamount(){
      x = id-(-4);
      return x;
    }
    function clearintervals()
    {
      var interval_id = window.setInterval(()=>{}, 99999);
      for (var i = 0; i < interval_id; i++)
      window.clearInterval(i);
    }
  }
}