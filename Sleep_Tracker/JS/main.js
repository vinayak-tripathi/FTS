var details, count = 0;
var timediff;

function show() {
    if (document.getElementById("time").rows.length>6){
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
    var min_list=[];
    var date_list=[];
    var list=[];
    localStorage.clear();
    localStorage["datas"]=JSON.stringify([]);
    localStorage["date"]=JSON.stringify([]);
    localStorage["diff"]=JSON.stringify([]);
    console.log(count);
    for(var  i=0;i<count;i++){
        try {
            var da=(document.getElementById("da"+i).value);
            var st=(document.getElementById("st"+i).value);
            var wt=(document.getElementById("wt"+i).value); 
            var time1=new Date(da + " " + st).getTime();
            var time2=new Date(da + " " + wt).getTime();
            var msec = time2 - time1;
            if (msec<0){
                msec=24*60*60*1000+msec;
            }
            var mins = Math.floor(msec / 60000);
            
            var hrs = Math.floor(mins / 60);
            min_list.push(mins/60);
            var days = Math.floor(hrs / 24);
            console.log("In minutes: "+ mins + " minutes");
            mins = mins % 60;
            console.log("In hours: "+ hrs + " hours, " + mins + " minutes");
            hrs = hrs % 24;
            console.log("In days: "+ days + " days, " + hrs + " hours, " + mins + " minutes");
            
            date_list.push(da);
            list.push('<tr>'+
                    '<td>'+da+'</td>'+
                    '<td>'+st+'</td>'+
                    '<td>'+wt+'</td>'+
                    '<td>'+days + " days, " + hrs + " hours, " + mins + " minutes"+'</td>'+
                    '</tr>');
            // console.log(list);
            localStorage["datas"]=JSON.stringify(list);
        }
        catch(err){
            
        }
        
    }
    console.log(min_list+"list---------------------");
    localStorage["datas"]=JSON.stringify(list);
    localStorage["diff"]=JSON.stringify(min_list);
    localStorage["date"]=JSON.stringify(date_list);
}

function diff(){
    var stored_datas = JSON.parse(localStorage["datas"]);
    console.log(stored_datas);
    // console.log(timediff)
    var len=stored_datas.length;
    console.log(len);
    for(var i=0;i<len;i++){
        console.log(stored_datas[i]+" for");
        timediff.append(
            stored_datas[i]
        )
    }
    
}