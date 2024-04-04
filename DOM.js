
function print(){
    var jname = document.getElementById("name").value;
    var jphone = document.getElementById("phone").value;
    var jdate = document.getElementById("date").value;
    var jaddress = document.getElementById("address").value;
    var jshampoo = parseFloat(document.getElementById("shampoo").value);
    var jsoap = parseFloat(document.getElementById("soap").value);
    var jjuice = parseFloat(document.getElementById("juice").value);
    var jpulses = parseFloat(document.getElementById("pulses").value);
    var jchacolates =parseFloat (document.getElementById("chacolates").value);
    var jeggs = parseFloat(document.getElementById("eggs").value);

    var toatalProductValue= jshampoo  + jsoap + jjuice + jpulses + jchacolates + jeggs ;

    var gst=0.18;
    var toatalGst=toatalProductValue*gst;
    var toatalAmount=toatalProductValue+toatalGst;
    var formDetailsHtml =
     `<div class="form_details">
            <h2>PersonalDetails</h2>
            <hr>
            <p><strong>Name: </strong>${jname}</p>
            <p><strong>Phone: </strong>${jphone}</p>
            <p><strong>Date: </strong>${jdate}</p>
            <p class="form_address"><strong>Address: </strong>${jaddress}</p>
            
            <h2>Items</h2>
            <hr>
            <p><strong>Shampoo: </strong>${jshampoo}</p>
            <p><strong>Soap: </strong>${jsoap}</p>
            <p><strong>Juice: </strong>${jjuice}</p>
            <p><strong>Pulses: </strong>${jpulses}</p>
            <p><strong>Chacolates: </strong>${jchacolates}</p>
            <p><strong>Eggs: </strong>${jeggs}</p>
            <hr>
            <p><strong>Toatal Product Value: </strong>${toatalProductValue}</p>
            <p><strong>GST: </strong>18%</p>
            <p><strong>Toatal GST: </strong>${toatalGst}</p>
            <hr>
            <p><strong>Toatal Amount With GST: </strong>${toatalAmount}</p>      
        </div> `;

    var jresult = document.getElementById("result");
    jresult.innerHTML = formDetailsHtml;
    jresult.style.display='flex';
    // jresult.style.justifyContent='space-around';



}

    