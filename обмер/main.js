function calculation() {
    let table = document.getElementById('table');
    // получаю все строки тела таблицы
    let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    //создаю массив значений из input
    let dataArray = [];
    for (let i = 0; i < rows.length; i++) {
        let inputs = rows[i].getElementsByTagName('input');
        let dataObject = {
            length: parseInt(inputs[0].value),
            angle: parseInt(inputs[1].value)
        };
        dataArray.push(dataObject);
    }  
    //основной расчет  
    let arr = ["0 0"]; 
    let prevX = 0;
    let prevY = 0;
    let arrSvg =[];
    for (let e of dataArray) {
        let rad = e.angle * (Math.PI / 180) 
        let x =Math.round(prevX + ((e.length / 10) * Math.round(Math.cos(rad))));
        let y =Math.round(prevY + ((e.length / 10) * Math.round(Math.sin(rad))));
        arr += ` ${x} ${y} `;
        prevX = x;
        prevY = y;
        arrSvg += `L ${x} ${y} `;
    }
    console.log(arrSvg)
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';        
    outputDiv.innerHTML = arr;

    // // Добавляем path в SVG
    let pathElement = document.getElementById('svgPath');    
    pathElement.setAttribute('d', `M 0 0 ${arrSvg} z`);
}
calculation()