async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const url = 'http://192.168.1.2/JSON/task.json';


(async () => {
    try {
        const fetchedData = await fetchData(url);
        for (let index = 0; index <= fetchedData.tasks.length; index++) {
            var task_name = fetchedData.tasks[index].task_name;
            var done = fetchedData.tasks[index].done;

            const tasks = document.getElementById("tasks");

            const newDiv = document.createElement("div");
            if (done == true) {
                var cont = '<p class="tNam">' + task_name + '</p><input class="tChk" type="checkbox" name="tChk" checked><img class="tskD" onclick="tskRem()" src="/Icons/delete2.svg" alt="" srcset="">';
                newDiv.className = "tsk";
                newDiv.innerHTML = cont;

                tasks.appendChild(newDiv);
            } else {
                var cont = '<p class="tNam">' + task_name + '</p><input class="tChk" type="checkbox" name="tChk"><img class="tskD" onclick="tskRem()" src="/Icons/delete2.svg" alt="" srcset="">';
                newDiv.className = "tsk";
                newDiv.innerHTML = cont;

                tasks.appendChild(newDiv);
            }

            
        }
    } catch (error) {
        // Handle any errors here
    }
})();
