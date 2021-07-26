var student=[];
function submit(){
    var display=[];
    for(var x=1;x<=4;x++){
        var s=document.getElementById("name_of_the_student_"+x).value;
        console.log(s);
        student.push(s);
        
    
    }
    console.log(student);
    var l=student.length;
for(var p=0;p<l;p++){
     display.push("<h4>name="+student[p]+"</h4>");
     console.log(display);
}
document.getElementById("display_name_with_commas").innerHTML=display;
var rc=display.join(" ");
console.log(rc);
document.getElementById("display_name_without_commas").innerHTML=rc;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    student.sort();
    var display1=[];
    var l=student.length;
    for(var p=0;p<l;p++){
         display1.push("<h4>name="+student[p]+"</h4>");
         console.log(display1);
    }
    var rc=display1.join(" ");
    console.log(rc);
    document.getElementById("display_name_without_commas").innerHTML=rc;
}