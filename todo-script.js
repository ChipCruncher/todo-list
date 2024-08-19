function takeInputToList() {
    var listInput = document.querySelector("input");
    var listCreate = document.createElement("li");
    var divList = document.getElementById("list");
    var notUrgDivList = document.getElementById("notUrgent");
    var checkbox = document.getElementById("check");
    var urgent = document.getElementById("urgentInput");
    var total = document.getElementById("totalCount");
    var urgCount = document.getElementById("urgCount");
    var optCount = document.getElementById("optCount")
    listCreate.innerText = listInput.value;
    listCreate.style.fontFamily = "Franklin Gothic Medium";
    listCreate.style.fontWeight = 100;
    if (urgent.value === "/urgent" && urgent.value !== " " && listInput.value !== " ") {
        divList.appendChild(listCreate);
        divList.style.border = "solid";
        divList.style.color = "red";
        total.innerText++;
        urgCount.innerText++;
    }
    else {
        notUrgDivList.appendChild(listCreate);
        notUrgDivList.style.border = "solid";
        notUrgDivList.style.color = "green";
        total.innerText++;
        optCount.innerText++;
    }
};