function showdate() {
    var date = new Date();
    var day = date.getDate();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var formattedDate = day + "/" + month + "/" + year;
    document.getElementById("result1").textContent = formattedDate;
}
function showtime()
{
	var date = new Date();
	document.getElementById("result2").innerHTML = date;
}