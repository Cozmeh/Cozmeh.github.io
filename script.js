      function disableselect(e){                             //                                                                    
      return false                                           //          
      }                                                      //                         
      function reEnable(){                                   //                             
      return true                                            //  this disables text highlight and copy functionality                                       
      }                                                      //                                
      document.onselectstart=new Function ("return false")   //                                                                
      if (window.sidebar){                                   //                                   
      document.onmousedown=disableselect                     //                                         
      document.onclick=reEnable                              //                                         
      }

      let MainBall = document.getElementById("ball");
      document.onmousemove = function(e)
      {
          MainBall.style.left = e.pageX - (MainBall.offsetWidth/2) + "px";
          MainBall.style.top = e.pageY - (MainBall.offsetWidth/2) + "px";
      }
