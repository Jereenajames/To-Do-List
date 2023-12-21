addtask=()=>{
     let array=[]
    let a = document.getElementById("task-input").value 
    let b= document.getElementById("list-container")
    let d =b.innerHTML+="<li><input type= 'checkbox'>"+a+"</li>"
    array.push(d)
    document.getElementById("task-input").value=" "
      b.style.listStyle="none"
      }