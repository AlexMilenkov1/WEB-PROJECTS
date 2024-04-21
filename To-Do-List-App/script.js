const addTaskButton = document.querySelector('.row button')
const taskElement = document.getElementById('task-input')
const tasksListElement = document.querySelector('.list-container')

console.log(tasksListElement);

addTaskButton.addEventListener('click', () => {
    const task = taskElement.value 

    if (!task) {
        return
    } 

    const liElement = document.createElement('li')
    liElement.textContent = task

    tasksListElement.appendChild(liElement)

    taskElement.value = ''

    liElement.addEventListener('click', () => {
        if (!liElement.classList.contains('checked-item')) {
            liElement.classList.add('checked-item')
        } else {
            liElement.classList.remove('checked-item')
        }
    })
})

