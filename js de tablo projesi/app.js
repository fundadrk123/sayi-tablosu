let olustur = document.getElementById("olustur");
olustur.onclick = function() {
    let sayac = 1;
    let satir = document.getElementById("satir").value;
    let sutun = document.getElementById("sutun").value;

    let table = document.createElement("table");
    for (let i = 0; i < satir; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j < sutun; j++) {
            let td = document.createElement("td");
            td.innerHTML = sayac++;
            tr.appendChild(td);

        }
    }
    document.getElementById("goster").innerHTML = "";
    document.getElementById("goster").appendChild(table);
}