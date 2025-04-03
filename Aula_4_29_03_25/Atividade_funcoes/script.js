function addItem() {
    let input = document.getElementById("itemInput");
    let value = input.value.trim();
    if (value === "") return;
    
    let table = document.getElementById("itemTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    let cell = newRow.insertCell(0);
    cell.textContent = value;
    
    let select = document.getElementById("itemSelect");
    let option = document.createElement("option");
    option.text = value;
    select.add(option);
    
    input.value = "";
}

function markItem() {
    let select = document.getElementById("itemSelect");
    let selectedValue = select.value;
    let rows = document.getElementById("itemTable").getElementsByTagName("tbody")[0].rows;
    
    for (let row of rows) {
        if (row.cells[0].textContent === selectedValue) {
            row.style.backgroundColor = "yellow";
            return;
        }
    }
}

function unmarkItem() {
    let select = document.getElementById("itemSelect");
    let selectedValue = select.value;
    let rows = document.getElementById("itemTable").getElementsByTagName("tbody")[0].rows;
    
    for (let row of rows) {
        if (row.cells[0].textContent === selectedValue) {
            if (row.style.backgroundColor === "yellow") {
                row.style.backgroundColor = "";
            } else {
                alert("O item já está desmarcado.");
            }
            return;
        }
    }
}

function removeItem() {
    let select = document.getElementById("itemSelect");
    let selectedValue = select.value;
    let table = document.getElementById("itemTable").getElementsByTagName("tbody")[0];
    
    for (let i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[0].textContent === selectedValue) {
            table.deleteRow(i);
            select.remove(select.selectedIndex);
            return;
        }
    }
}

document.getElementById("itemInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});
