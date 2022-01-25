const task = document.getElementById('task')
const tasksDiv = document.getElementById('tasks-div')
const darkLightMode = document.getElementById('mode')
const tasksInput = document.getElementsByClassName('new-task')
const toDoDiv = document.getElementById('todo-div')
const organizeMedia = document.getElementById('organize-media')

const lightDark ={

    light:{
        background: "hsl(0, 0%, 96%)",
        inputBackground: "hsl(0, 0%, 98%)",
        borderBottom:"(66, 66, 66, 0.226)",
        inputText:"#000",
    },
    dark: {
        background: "hsl(235, 21%, 11%)",
        inputBackground: "hsl(235, 24%, 19%)",
        
    }
}

const changeMode = (mode) =>{

    let body =  document.getElementsByTagName('body')
    
    if(mode.classList.contains('light-mode')){
        mode.classList.remove('light-mode')
        mode.className = "dark-mode"
        mode.src = "images/icon-sun.svg"
        body[0].style.backgroundColor = lightDark.dark.background
        body[0].style.backgroundImage = "url(images/bg-desktop-dark.jpg)"
        task.style.backgroundColor = lightDark.dark.inputBackground
        toDoDiv.style.backgroundColor = lightDark.dark.inputBackground
        organizeMedia.style.backgroundColor = lightDark.dark.inputBackground
    }else if(mode.classList.contains('dark-mode')){
        mode.classList.remove('dark-mode')
        mode.className = "light-mode"
        mode.src = "images/icon-moon.svg"
        body[0].style.backgroundColor = lightDark.light.background
        body[0].style.backgroundImage = "url(images/bg-desktop-light.jpg)"
        task.style.backgroundColor = lightDark.light.inputBackground
        toDoDiv.style.backgroundColor = lightDark.light.inputBackground
        organizeMedia.style.backgroundColor = lightDark.light.inputBackground
    }
} 

//Erase the task division 
const eraseTask = (taskToErase) =>{

  taskToErase.remove();
}


//check and uncheck task adding or removing classes to it
const checkTask = (check, text) =>{

    if(text.classList.contains('complete')){
        check.innerHTML = ''
        check.classList.remove("check")
        check.className = "uncheck"
        text.classList.remove('complete') 
    }else{
        let checkImg = document.createElement("img")
        text.className = "complete"
        checkImg.className = "check-img"
        checkImg.src = "./images/icon-check.svg"
        check.className = "check"
        check.appendChild(checkImg)
    }
    
    
}



const addTask = (newTask) =>{

    //create a task div
    let newTaskDiv = document.createElement('div')
    newTaskDiv.className = "new-task"

    //create a check div
    let check = document.createElement('div')
    check.className = "uncheck"
    check.addEventListener("click", function(){
        checkTask(check, text)
    })
    

    //create a text div 
    let taskText = document.createElement('div')
    taskText.className= "task-text"

    //create an cross img
    let cross = document.createElement('img')
    cross.src = "./images/icon-cross.svg"
    cross.addEventListener("click", function(){
        eraseTask(newTaskDiv)
    })

    //create a paragraph and add the input value
    let text = document.createElement('p')
    text.innerText = newTask
    text.addEventListener("click", function(){
        checkTask(check, text)
    })

    //add all elements to the task div
    taskText.appendChild(text)
    taskText.appendChild(cross)
    newTaskDiv.appendChild(check)
    newTaskDiv.appendChild(taskText)
    tasksDiv.appendChild(newTaskDiv)

}

darkLightMode.addEventListener('click', function(){
    changeMode(mode)
})


task.addEventListener('keypress', function(e){

    if(e.key === 'Enter'){
        addTask(task.value)
        task.value = ''
    }

})