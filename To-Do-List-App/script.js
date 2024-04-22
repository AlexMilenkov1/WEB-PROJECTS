// Declare all needed the info
const addTaskButton = document.querySelector('.row button')
const taskElement = document.getElementById('task-input')
const tasksListElement = document.querySelector('.list-container')
const clearAllTaskElement = document.querySelector('header p')

addTaskButton.addEventListener('click', () => {
    const task = taskElement.value 

    // Check if the user do not enter input
    if (!task) {
        return
    } 

    // Create the task 
    const liElement = document.createElement('li')
    liElement.textContent = task

    // Make a close element that can remove the task
    const closeElement = document.createElement('img')
    closeElement.src = 'images/x-button.png'

    closeElement.addEventListener('click', () => {
        liElement.remove()

        saveData()
    })

    liElement.append(closeElement)

    tasksListElement.appendChild(liElement)

    // Add functionality to check and ucheck specific task
    liElement.addEventListener('click', () => {
        if (!liElement.classList.contains('checked-item')) {
            liElement.classList.add('checked-item')
        } else {
            liElement.classList.remove('checked-item')
        }

        saveData()
    })

    // Reset the input
    taskElement.value = ''

    saveData()
})

clearAllTaskElement.addEventListener('click', () => {
    if (!taskElement) {
        return
    }
    tasksListElement.innerHTML = ''

    saveData()
})

// This function saves the data to the local storage 
function saveData() {
    localStorage.setItem('data', tasksListElement.innerHTML)
}

// This function shows all the changes that were made by starting the browser
function onLoad() {
    tasksListElement.innerHTML = localStorage.getItem('data')
}

onLoad()