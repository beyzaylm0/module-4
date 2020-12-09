(function(window){
	var bySpeaker= new Object();
	var speakWorld="GoodBye";
	bySpeak.speak=function (name)
	{
	console.log(speakWorld +" "+ name);
};
window.bySpeaker=bySpeaker;
})(window);