var btn_inc = document.querySelector("#btn_inc");
var table = document.querySelector("#my_table");
    
    btn_inc = addEventListener('click', incRow);


    function incRow(parasm){
        var table_lenght = my_table.rows.length;
        var row_table = table.insertRow(table_lenght);

        var cell_1 = row_table.insertCell(0);
        cell_1.innerHTML = "w3,k1";
        var cell_2 = row_table.insertCell(1);
        cell_2.innerHTML = "w3,k2";
        var cell_3 = row_table.insertCell(2);
        cell_3.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }

