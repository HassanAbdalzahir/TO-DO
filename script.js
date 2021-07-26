const el = (element) => {
    if (element.charAt[0] == '#') {
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
}

let theInput = el('.add-task input')[0],
    plusKey = el('.plus')[0],
    tasksContainer = el('.task-content')[0],
    noTaskMsg = el('.no-tasks')[0],
    taskCount = el('.task-count span')[0],
    tasksDone = el('.task-completed span')[0],
    statusMsg = el('.status small')[0];

let checkCount = () => {
    
    taskCount.textContent = tasksContainer.children.length - 1;

    tasksDone.textContent = document.querySelectorAll('.fineshed').length;
}

    // What Happens When Click On The Key
plusKey.onclick = () => {
    
    // If The Input Is Clear Do Nothing, Or Warn me
    if (theInput.value == "") {
        statusMsg.textContent = "Please Type Something In The Field";
        statusMsg.className = 'bad';
        theInput.focus();
    }else{
        noTaskMsg.style.display = 'none';
        statusMsg.textContent = "You Are Good!";
        statusMsg.className = 'good';
        
        let newTaskContainer = document.createElement('span'),
            newKey = document.createElement('span');
        
        newTaskContainer.textContent = theInput.value;
        newTaskContainer.className = 'task-box';
        newKey.textContent = 'Delete';
        newKey.className = 'delete';
        newTaskContainer.appendChild(newKey);
        tasksContainer.appendChild(newTaskContainer);
        theInput.value = "";
        theInput.focus();
    }

    checkCount();
};

document.addEventListener('click', (e) => {
    
    if (e.target.className == 'delete'){
        
        e.target.parentNode.remove()
        
        if (tasksContainer.children.length == 1) {
            noTaskMsg.style.display = 'block';
        }
    }

    if (e.target.classList.contains('task-box')){
        e.target.classList.toggle('fineshed')
    }
    
    checkCount();
})
