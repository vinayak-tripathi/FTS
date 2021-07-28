var details, count = 0;

function show() {
    if (count>6){
        alert("7 days data is enough");
    }
    else{
        details.append('<tr>'+
                    '<td><input type="date" name="date" id="da'+count+'" class="da"></td>'+
                    '<td><input type="time" name="st" id="st'+count+'" class="st"></td>'+
                    '<td><input type="time" name="wt" id="wt'+count+'" class="wt"></td>'+
                    '<td><img class= "close" src="images/close.png"/></td>'+
                    '</tr>');
        var last = details.find("tr:last");
        last.find("img").click(function () {
            last.remove();
        });
        count+=1;
    }

    console.log(count);
}

function analyse(){
    console.log(count);
    var list = [];
    for(var  i=0;i<count;i++){
        console.log(document.getElementById("da"+i).value);
        console.log(document.getElementById("st"+i).value);
        console.log(document.getElementById("wt"+i).value);
    }
    
}