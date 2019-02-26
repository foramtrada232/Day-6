mdc.textField.MDCTextField.attachTo(document.querySelector('.email'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.fname'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.lname'));




const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.sg'));
$("#b1").on('click',function(evt){
	dialog.open();
})
$(".cancel").on('click',function(evt){
	dialog.close();
})

function getName(){
var email = document.getElementById('email').value;
var pass = document.getElementById('password').value;
console.log("Name =======>" , email);
console.log("Password ======>" , pass);
}



const dialog1 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.rg'));
$("#b2").on('click',function(evt){
	dialog1.open();
})
$(".close").on('click',function(evt){
	dialog1.close();
})

function getValue(){
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
console.log("First Name =======>" , fname);
console.log("Last Name ======>" , lname);
}
// $(".submit").on('click',function(evt){
// 	var input_value = document.getElementById("submit").value;
// 	console.log(input_value);
// })




// $('.search_btn').click(function(){
// 		var input_value = document.getElementById("search").value;
// 		if(input_value.length > 0){
// 			$("body").append( $(
// 				`<div class="alert alert-success alert-dismissible fade in">
// 				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
// 				You are Search Somthing....
// 				</div>`
// 				));
// 		}else{
// 			$("body").append( $(
// 				`<div class="alert alert-danger alert-dismissible fade in">
// 				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
// 				Enter Something To Search....
// 				</div>`
// 				));
// 		}
// 	});