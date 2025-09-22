async function loadExcel() {
    const response = await fetch("table.xlsx"); // твій файл у тій самій папці
    const data = await response.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    let html = "";
    rows.forEach(row => {
        html += "<tr>";
        row.forEach(cell => {
            html += "<td>" + (cell ?? "") + "</td>";
        });
        html += "</tr>";
    });
    document.getElementById("table").innerHTML = html;
}

loadExcel();