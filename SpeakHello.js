(function(window)
{
	var helloSpeaker=new Object();
	var speakWorld="Hello";
	helloSpeaker.speak=function (name)
	{
		console.log(speakWorld + " " + name);
	};
	window.helloSpeaker=helloSpeaker;

})(window);