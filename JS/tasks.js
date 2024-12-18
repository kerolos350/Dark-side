var serverIP = location.host;
var link = "http://" + serverIP;

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

// Split the string by semicolon and space
var parts = user.split('; ');

// Initialize a variable to store the username
var username = '';

// Loop through the parts to find the one containing "user_name="
for (var i = 0; i < parts.length; i++) {
    if (parts[i].startsWith('user_name=')) {
        // Extract the username part after "user_name="
        username = parts[i].substring('user_name='.length);
        break; // Exit the loop once found
    }
}

const url = link + '/JSON/' + username + '-tasks.json';


(async () => {
    try {
        const fetchedData = await fetchData(url);
        for (let index = 0; index <= fetchedData.tasks.length; index++) {
            var task_name = fetchedData.tasks[index].task_name;
            var done = fetchedData.tasks[index].done;

            const tasks = document.getElementById("tasks");

            const newDiv = document.createElement("div");
            if (done == true) {
                var cont = '<p class="tNam">' + task_name + '</p><input onclick="checkChecker()" id="' + index +'check" class="tChk" type="checkbox" name="tChk" checked><img id="' + index +'del" class="tskD" onclick="tskRem()" src="/Icons/delete2.svg" alt="" srcset="">';
                newDiv.className = "tsk R" + index;
                newDiv.innerHTML = cont;

                tasks.appendChild(newDiv);
            } else {
                var cont = '<p class="tNam">' + task_name + '</p><input onclick="checkChecker()" id="' + index +'check" class="tChk" type="checkbox" name="tChk"><img id="' + index +'del" class="tskD" onclick="tskRem()" src="/Icons/delete2.svg" alt="" srcset="">';
                newDiv.className = "tsk R" + index;
                newDiv.innerHTML = cont;

                tasks.appendChild(newDiv);
            }

            
        }
    } catch (error) {
        // Handle any errors here
    }
})();
