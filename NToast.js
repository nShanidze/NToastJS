/*
 *
 * NToast
 * by nodo-shanidze [nodo-shanidze@mail.ru & shanidzenodo0@gmail.com]
 * ceated at 11/26/2021
 * version (v0.1.5)  
 *
*/ 
/*
 *
 * NToast
 * by nodo-shanidze [nodo-shanidze@mail.ru & shanidzenodo0@gmail.com]
 * ceated at 11/26/2021
 * version (v0.1.5)  
 *
*/ 
  var NToastLoaded=document.createElement("div");
  NToastLoaded.classList.add("NToastJs-loaded"),
  document.body.appendChild(NToastLoaded);

  let id = 0;
  
  let closeTime = 100;
  
  let c = 0;

    function NToast
    (
        bgColor,

        position,

        description,

        icon,

        costum_icon,

        progressbar

    ){
    "tr"!=position&&"TR"!=position||
    $(".NToastJs-loaded").css({left:"auto",top:"0",right:"0",bottom:"auto"}),
    "tl"!=position&&"TL"!=position||$(".NToastJs-loaded").css({left:"0",top:"0",right:"auto",bottom:"auto"}),
    "br"!=position&&"BR"!=position||$(".NToastJs-loaded").css({left:"auto",top:"auto",right:"0",bottom:"0"}),
    "bl"!=position&&"BL"!=position||
    $(".NToastJs-loaded").css({left:"0",top:"auto",right:"auto",bottom:"0"});
    closeTime = 100;
    if(description.length >= 46)
    {
      console.log("NToastJS - error! the description should not exceed 45 characters") 
      return false;
    }
    if(description.length >= 1)
    {
      var addicon;
      if(icon ==  true)
      {
        var addicon  = "<span class='NToastJs-icon'><i class='fa fa-check'></i></span>";
      }
      else {addicon = ''}
      costum_icon.length>=2&&(addicon=addicon.replace("fa fa-check",costum_icon)),progressbar?progress="<div class='NToastJs-progress' id='progress-"+id+"'></div>":progress="";
      id++;
      var NToastDiv = document.createElement("div");
      NToastDiv.classList.add("NToastJs")
      NToastDiv.setAttribute("id","Not-"+id)
      NToastDiv.style.backgroundImage = "linear-gradient("+bgColor+","+bgColor+")";
      NToastDiv.style.filter = "drop-shadow(0px 0px 0px "+bgColor+") ";
      NToastDiv.style.webkitFilter = "drop-shadow(0px 0px 0px "+bgColor+") ";
      NToastDiv.innerHTML="\
      "+addicon+"\
      <div class='NToastJs-container'> <span class='NToastJs-text'>"+description+"</span> </div>\
      <span class='NToastJs-close' id='n-"+id+"'> <i class='fas fa-times'></i> </span>\
      "+progress+"";
      document.getElementsByClassName("NToastJs-loaded")[0].appendChild(NToastDiv);
      if(addicon =='')
      {
          document.getElementsByClassName("NToastJs-text")[0].classList.add("withouticon");
      }
      $(".NToastJs-close").click(function(){
          $("#Not-"+ $(this).attr("id").replace("n-","")  ).remove();
      })
      c = getfullnotifiamount();
      console.log(getfullnotifiamount());
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
        }, id*100)
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

        }, c*100)
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

 
