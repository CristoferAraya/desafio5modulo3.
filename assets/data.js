const btnAgregar = document.querySelector('#newTask');
const task = document.querySelector('#newTask');
const tbodyTasks = document.querySelector('#tasks');
const tasksList = [];
const totalTask = document.querySelector('#totalTasks');
const taskReady = document.querySelector('#taskReady');

btnAgregar.addEventListener('keypress', function (e){
    if(e.keyCode === 13){
        addTask();
    }
});
const addTask = () => {
    if(task.value === '') {
        alert('Debe Ingresar una Tarea');
        return;
    }
}

const newTask = {
    id: tasksList.length + 1,
    name: task.value,
    status: false
};

tasksList.push(newTask);
   updateList()

function updateList() {
    let html = '', countTaskReady = 0;
    for (let task in tasksList) {
        if (task.status) {
            countTaskReady++;
        }

        html += `
        <tr class="${task.status ? 'bg-succes' : 'bg-light'}">
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td class="text-right"><button onlclick="updateStatus(${task.id})" 
                class="btn btn-${task.status ? 'success' : 'warning'}">${task.status ?
                'Realizada' : 'Pendiente'}</button>
            </td>
            <td class="text-right"><button onclick="deleteTask(${task.id})" 
                class="btn btn-danger" >Eliminar</button>
            </td>
        </tr> 
    `;
    }
    task.value = '';
    tbodyTasks.innerHTML = html;
    totalTask.innerHTML = tasksList.lenght;
    taskReady.innerHTML = countTaskReady;
}

const updateStatus = (taskId) =>{
    const index = tasksList.findIndex(task => task.id === taskId);
    tasksList[index].status = !tasksList[index].status;
    updateList();
}

const deleteTask = (taksId) => {
    const confirmation = confirm('¿Esta seguro de eliminar la tarea?');
    if(confirmation){
        const index = tasksList.findIndex(task => task.id === task)
        tasksList.splice(index, 1);
        updateList();
    }
}