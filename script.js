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

      window.onload = function () {  // window right after it loads
        var ball = document.getElementById("ball"); // accessing the ball or circle whatever
        var x, y; // declaring the axis
        window.addEventListener("mousemove", function (event) { // detecting the mouse movement 
          x = event.clientX; // mouse or cursor's X location value
          y = event.clientY; // mouse or cursor's Y location value
          if (true) // or we can use [typeof x != 'undefined']
          { 
            ball.style.left = x + "px"; // changing the ball's horizontal location to match the horizontal loction of the mouse or cursor
            ball.style.top = y + "px"; // changing the ball's vertical location to match the vertical loction of the mouse or cursor
          }
        });
      };