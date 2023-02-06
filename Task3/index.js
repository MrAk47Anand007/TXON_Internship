let input = document.getElementById("userText");
let addBtn = document.getElementById("addBtn");
let tasks = document.getElementById("tasks");


input.addEventListener('keyup',()=>{
    if(input.value.trim() !==0)
    {
        addBtn.classList.add('active');
    }else {
        addBtn.classList.remove('active');
    }
})
