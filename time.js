function caldate()
{
	var r= new Date();
	var n = r.getHours();
	var j = r.getMinutes();
    document.getElementById("demo").innerHTML = n;
	document.getElementById("demo").innerHTML = j;
	//console.log(document.write("Time is :" +n + j));
	console.log("Hours :" + n );
	console.log("Minutes :" + j);
	


}