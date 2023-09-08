function showNewTask() {
    var addTask = document.getElementById("new");
    var addTaskCon = document.getElementById("newCon");
    var input = document.getElementById("nwTskName");

    if (addTask.style.display != "block") {
        addTask.style.display = "block";
        addTaskCon.style.display = "flex";
        input.focus();
    } else {
        addTask.style.display = "none";
        addTaskCon.style.display = "none";
    }
}