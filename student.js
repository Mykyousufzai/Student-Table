let container = document.getElementById('container')
let studentList = document.getElementById('student_list')
let studentName = document.getElementById('name')
let fatherName = document.getElementById('father')
let studentScore = document.getElementById('score')
let studentTable = document.getElementById('studentTable')
let sNo = 0
let addScore = 0

function createChild () {

    let div = document.createElement('div')
    div.className = 'create-div_01'
    let tableRow = document.createElement("tr")
    let SerialNumber = document.createElement("td")
    sNo = sNo + 1
    SerialNumber.innerText = sNo
    let tablename = document.createElement("td")
    tablename.innerText = studentName.value
    let tablefname = document.createElement("td")
    tablefname.innerText = fatherName.value
    let tablescore = document.createElement("td")
    tablescore.innerText = studentScore.value
    let total = document.createElement("td")
    addScore = addScore + parseInt (tablescore.innerText)
    total.innerText=addScore
    let divTitelEl = document.createElement('h1')
    divTitelEl.className = 'test-div-tetle' 
    divTitelEl.innerText = studentName.value 
    // let divBtnEl = document.createElement('button')
    // divBtnEl.className = 'test-div-button'
    // divBtnEl.innerText = 'Delete'
    // divBtnEl.onclick = function () { 
    //     div.remove()
    // }
    tableRow.appendChild(SerialNumber)
    tableRow.appendChild(tablename)
    tableRow.appendChild(tablefname)
    tableRow.appendChild(tablescore)
    tableRow.appendChild(total)
    div.appendChild(divTitelEl)

    studentTable.appendChild(tableRow)

    // div.appendChild(divBtnEl)

    // container.appendChild(div)




}