let students = document.querySelector("#students");
// var theAnswer = "";


$(document).ready(function() {
    $.getJSON('https://raw.githubusercontent.com/emuel/api/master/5110', function(data) {
            for(var i = 0; i < data.length; i++){
                students.innerHTML += "<div id='student'><div id='name'>" + data[i].stu_name + " " + data[i].last_name + "</div>" 
                    + "<br><img src=http://" + data[i].domain + "/images/me.jpg><br>" 
                    + "<div id='fact'>" + data[i].fact + "</div><br></div>";
            } 
        });
});