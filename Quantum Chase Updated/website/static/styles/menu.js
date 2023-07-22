var sdg = 1;
var value_sdg = sdg;
document.getElementById("sdg-value").innerHTML = value_sdg
var sdg1 = document.getElementById("sdg1");
var sdg2 = document.getElementById("sdg2");
var sdg3 = document.getElementById("sdg3");
var sdg4 = document.getElementById("sdg4");
var sdg5 = document.getElementById("sdg5");
var sdg6 = document.getElementById("sdg6");
var sdg7 = document.getElementById("sdg7");
var sdg8 = document.getElementById("sdg8");
var sdg9 = document.getElementById("sdg9");
var sdg10 = document.getElementById("sdg10");
var sdg11 = document.getElementById("sdg11");
var sdg12 = document.getElementById("sdg12");
var sdg13 = document.getElementById("sdg13");
var sdg14 = document.getElementById("sdg14");
var sdg15 = document.getElementById("sdg15");
var sdg16 = document.getElementById("sdg16");
var sdg17 = document.getElementById("sdg17");
        
var play = document.getElementById("play_button")
var next = document.getElementById("next_button")
var prev = document.getElementById("prev_button")

        next.addEventListener("click", function(){
            var sdg1Display = getComputedStyle(sdg1).getPropertyValue('display');
            var sdg2Display = getComputedStyle(sdg2).getPropertyValue('display');
            var sdg3Display = getComputedStyle(sdg3).getPropertyValue('display');
            var sdg4Display = getComputedStyle(sdg4).getPropertyValue('display');
            var sdg5Display = getComputedStyle(sdg5).getPropertyValue('display');
            var sdg6Display = getComputedStyle(sdg6).getPropertyValue('display');
            var sdg7Display = getComputedStyle(sdg7).getPropertyValue('display');
            var sdg8Display = getComputedStyle(sdg8).getPropertyValue('display');
            var sdg9Display = getComputedStyle(sdg9).getPropertyValue('display');
            var sdg10Display = getComputedStyle(sdg10).getPropertyValue('display');
            var sdg11Display = getComputedStyle(sdg11).getPropertyValue('display');
            var sdg12Display = getComputedStyle(sdg12).getPropertyValue('display');
            var sdg13Display = getComputedStyle(sdg13).getPropertyValue('display');
            var sdg14Display = getComputedStyle(sdg14).getPropertyValue('display');
            var sdg15Display = getComputedStyle(sdg15).getPropertyValue('display');
            var sdg16Display = getComputedStyle(sdg16).getPropertyValue('display');
            var sdg17Display = getComputedStyle(sdg17).getPropertyValue('display');
            var nextDisplay = getComputedStyle(next).getPropertyValue('filter')
          if (sdg1Display === "block"){
            sdg2.style.display = "block";
            sdg1.style.display = "none";
            sdg +=1;
          } else if (sdg2Display === "block"){
            sdg3.style.display = "block";
            sdg2.style.display = "none";
            sdg +=1;
          } else if (sdg3Display === "block"){
            sdg4.style.display = "block";
            sdg3.style.display = "none";
            sdg +=1;
          } else if (sdg4Display === "block"){
            sdg5.style.display = "block";
            sdg4.style.display = "none";
            sdg +=1;
          } else if (sdg5Display === "block"){
            sdg6.style.display = "block";
            sdg5.style.display = "none";
            sdg +=1;
          } else if (sdg6Display === "block"){
            sdg7.style.display = "block";
            sdg6.style.display = "none";
            sdg +=1;
          } else if (sdg7Display === "block"){
            sdg8.style.display = "block";
            sdg7.style.display = "none";
            sdg +=1;
          } else if (sdg8Display === "block"){
            sdg9.style.display = "block";
            sdg8.style.display = "none";
            sdg +=1;
          } else if (sdg9Display === "block"){
            sdg10.style.display = "block";
            sdg9.style.display = "none";
            sdg +=1;
          } else if (sdg10Display === "block"){
            sdg11.style.display = "block";
            sdg10.style.display = "none";
            sdg +=1;
          } else if (sdg11Display === "block"){
            sdg12.style.display = "block";
            sdg11.style.display = "none";
            sdg +=1;
          } else if (sdg12Display === "block"){
            sdg13.style.display = "block";
            sdg12.style.display = "none";
            sdg +=1;
          } else if (sdg13Display === "block"){
            sdg14.style.display = "block";
            sdg13.style.display = "none";
            sdg +=1;
          } else if (sdg14Display === "block"){
            sdg15.style.display = "block";
            sdg14.style.display = "none";
            sdg +=1;
          } else if (sdg15Display === "block"){
            sdg16.style.display = "block";
            sdg15.style.display = "none";
            sdg +=1;
          } else if (sdg16Display === "block"){
            sdg17.style.display = "block";
            sdg16.style.display = "none";
            sdg +=1;
          } 
        }) 
        var value_sdg = sdg;
        document.getElementById("sdg-value").innerHTML = value_sdg;
            prev.addEventListener("click", function(){
                var sdg1Display = getComputedStyle(sdg1).getPropertyValue('display');
                var sdg2Display = getComputedStyle(sdg2).getPropertyValue('display');
                var sdg3Display = getComputedStyle(sdg3).getPropertyValue('display');
                var sdg4Display = getComputedStyle(sdg4).getPropertyValue('display');
                var sdg5Display = getComputedStyle(sdg5).getPropertyValue('display');
                var sdg6Display = getComputedStyle(sdg6).getPropertyValue('display');
                var sdg7Display = getComputedStyle(sdg7).getPropertyValue('display');
                var sdg8Display = getComputedStyle(sdg8).getPropertyValue('display');
                var sdg9Display = getComputedStyle(sdg9).getPropertyValue('display');
                var sdg10Display = getComputedStyle(sdg10).getPropertyValue('display');
                var sdg11Display = getComputedStyle(sdg11).getPropertyValue('display');
                var sdg12Display = getComputedStyle(sdg12).getPropertyValue('display');
                var sdg13Display = getComputedStyle(sdg13).getPropertyValue('display');
                var sdg14Display = getComputedStyle(sdg14).getPropertyValue('display');
                var sdg15Display = getComputedStyle(sdg15).getPropertyValue('display');
                var sdg16Display = getComputedStyle(sdg16).getPropertyValue('display');
                var sdg17Display = getComputedStyle(sdg17).getPropertyValue('display');
                var nextDisplay = getComputedStyle(next).getPropertyValue('filter')
              if (sdg17Display === "block"){
                sdg16.style.display = "block";
                sdg17.style.display = "none";
                sdg -=1;
              } else if (sdg16Display === "block"){
                sdg15.style.display = "block";
                sdg16.style.display = "none";
                sdg -=1;
              } else if (sdg15Display === "block"){
                sdg14.style.display = "block";
                sdg15.style.display = "none";
                sdg -=1;
              } else if (sdg14Display === "block"){
                sdg13.style.display = "block";
                sdg14.style.display = "none";
                sdg -=1;
              } else if (sdg13Display === "block"){
                sdg12.style.display = "block";
                sdg13.style.display = "none";
                sdg -=1;
              } else if (sdg12Display === "block"){
                sdg11.style.display = "block";
                sdg12.style.display = "none";
                sdg -=1;
              } else if (sdg11Display === "block"){
                sdg10.style.display = "block";
                sdg11.style.display = "none";
                sdg -=1;
              } else if (sdg10Display === "block"){
                sdg9.style.display = "block";
                sdg10.style.display = "none";
                sdg -=1;
              } else if (sdg9Display === "block"){
                sdg8.style.display = "block";
                sdg9.style.display = "none";
                sdg -=1;
              } else if (sdg8Display === "block"){
                sdg7.style.display = "block";
                sdg8.style.display = "none";
                sdg -=1;
              } else if (sdg7Display === "block"){
                sdg6.style.display = "block";
                sdg7.style.display = "none";
                sdg -=1;
              } else if (sdg6Display === "block"){
                sdg5.style.display = "block";
                sdg6.style.display = "none";
                sdg -=1;
              } else if (sdg5Display === "block"){
                sdg4.style.display = "block";
                sdg5.style.display = "none";
                sdg -=1;
              } else if (sdg4Display === "block"){
                sdg3.style.display = "block";
                sdg4.style.display = "none";
                sdg-=1;
              } else if (sdg3Display === "block"){
                sdg2.style.display = "block";
                sdg3.style.display = "none";
                sdg -=1;
              } else if (sdg2Display === "block"){
                sdg1.style.display = "block"
                sdg2.style.display = "none";
                sdg -=1;
              } 
            })
           
            
            play.addEventListener("click", function(){
              // var sdg_name;
              //   if (sdg == 1){
              //     sdg_name = "No Poverty";
              //   } else if (sdg == 2){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 3){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 4){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 5){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 6){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 7){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 8){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 9){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 10){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 11){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 12){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 13){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 14){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 15){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 16){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   } else if (sdg == 17){
              //     value_sdg = sdg;
              //     window.location.href = "/quiz/" + sdg;
              //   }
              window.location.href = "/loadout/" + sdg;
            });

            