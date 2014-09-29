 window.addEventListener("DOMContentLoaded", init);
        function init(){
            document.getElementById("btnAdd").addEventListener("click",onBtnAddClick);
            document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompleted);

            for(var i=0;i<window.localStorage.length;i++){
                var key = window.localStorage.key(i);
                var taskName = window.localStorage.getItem(key);

                var newTaskElement = document.createElement("li");
                newTaskElement.setAttribute("taskId",key);
                newTaskElement.innerHTML = taskName;
                newTaskElement.addEventListener("click", onTaskItemClick);
                document.getElementById("olTaskList").appendChild(newTaskElement);

            }

        }
        function onBtnAddClick(){
            var taskName = document.getElementById("txtTask").value;

            //storage
            var key = new Date().getTime().toString();
            window.localStorage.setItem(key,taskName);
            //ui
            var newTaskElement = document.createElement("li");
            newTaskElement.setAttribute("taskId",key);
            newTaskElement.innerHTML = taskName;
            newTaskElement.addEventListener("click", onTaskItemClick);
            document.getElementById("olTaskList").appendChild(newTaskElement);
        }
        function onTaskItemClick(){
            this.classList.toggle("completed");
        }
        function onBtnRemoveCompleted(){
            var completedTasks = document.querySelectorAll("li.completed");
            for(var i = completedTasks.length-1;i>=0;i--){
                var key = completedTasks[i].getAttribute("taskId");
                window.localStorage.removeItem(key);
                completedTasks[i].remove();
            }
        }
