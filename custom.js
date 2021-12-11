 // auto show modal
// call the fucntion after 3 sec
setTimeout(show_modal, 3000);
// auto close modal after 6 sec
// call the fucntion after 6 sec
setTimeout(close_modal, 6000);
// so modal will stay 3 sec 
 function show_modal(){
 	 var popup_box = document.getElementById('popup-box');
 	 popup_box.style.display = "block";
 }
 function close_modal(){
 	 var popup_box = document.getElementById('popup-box');
 	 popup_box.style.display = "none";
 }