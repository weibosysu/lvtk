var myApp = {
	isLogin: false,
	siblings: false,
	duration: 300,
	userName:"",
	userCommentTime:null,
	userCommentContent:"",
	getId: function(id){
		return document.getElementById(id);
	},
	show: function(id){
		clearInterval(timer);
		var timer = setInterval(function(){
			if(myApp.getId(id).style.display == "block") {
				clearInterval(timer);
			}else{
				myApp.getId(id).style.display = "block";
			}
		},myApp.duration);
	},
	hide: function(id){
		myApp.getId(id).style.display = "none";
	},
	init: function(){
		myApp.getId("comment-reply").addEventListener('click', function(){
			if(myApp.isLogin == true){
				//goto comment-page
				myApp.show("comment-page");
				myApp.hide("detail-page");
			}else{
				myApp.show("sign-page");
				myApp.hide("detail-page");
			}
		}, false);
		myApp.getId("ui-user-login").addEventListener('click',function(e){
			e.preventDefault();
			myApp.userName = myApp.getId("ui-user-name").value;
			var date = new Date();
			myApp.userCommentTime = date.getHours() + ':' + date.getMinutes();
			myApp.isLogin = true;
			myApp.hide("sign-page");
			myApp.show("comment-page");
		}, false);

		myApp.getId("sub-comment").addEventListener('click',function(){
			myApp.userCommentContent = myApp.getId("user-comment-content").value;
			var section = document.createElement('section');
			section.className = 'comment-content';
			html = '<div class="dp-user-img"><a href="#"><img src="images/user02.jpg" alt="userid"></a></div><div class="dp-user-count-wrap"><div class="dp-user-count"><p class="dp-user-info"><time>' + myApp.userCommentTime+ '</time><span class="user-name">' + myApp.userName +'</span></p><p class="dp-user-tag"><span class="user-tag pink">夜魔侠</span></p><p class="user-comment-detail">' + myApp.userCommentContent + '</p></div></div><div class="clear"></div>';
			// 查找第一个comment-content
			section.innerHTML = html;
			var con0 = document.getElementsByTagName('section')[0];
			myApp.getId("comment").insertBefore(section, con0);
			myApp.show("detail-page");
		}, false);

		myApp.getId("go-download").addEventListener('click', function(e){
			e.preventDefault();
			myApp.hide("detail-page");
			myApp.show("app-download-page");
		}, false);

		myApp.getId("go-back").addEventListener('click', function(e){
			myApp.show("detail-page");
			myApp.hide("app-download-page");
		}, false);
	}
}
window.onload = function(){
	myApp.init();
};