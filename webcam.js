var myVideoStream = document.getElementById('myVideo')     // make it a global variable
  var myStoredInterval = 0
  
function getVideo(){
  navigator.getMedia =  navigator.webkitGetUserMedia 
  navigator.getMedia({video: true, audio: false},
                     
    function(stream) {
      myVideoStream.srcObject = stream   
      myVideoStream.play();
  }, 
                     
   function(error) {
     alert('webcam not working');
  });
}
