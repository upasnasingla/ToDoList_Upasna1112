let key=0;

function addNewTask(){
    let person=prompt("please enter your task","Learn c++");
    if(person!=null){
        const taskdiv= document.createElement("div");
        
        const node = document.createTextNode(person);
        var heading=document.createElement("h1");
         heading.style.textAlign="center";
         heading.style.padding="20px";
         heading.style.border="2px solid cadetblue";
         heading.style.backgroundColor="rgb(107, 142, 218)";
         heading.addEventListener('click',func1);
         function func1(){
            let text2=prompt("Enter your items","Visit a salon");
             if(text2!=null){
                var paragraph=document.createElement("P");
                paragraph.style.textAlign="left";
                paragraph.style.padding="10px";
                paragraph.style.marginLeft="40px";
                paragraph.style.marginTop="20px";
                paragraph.style.fontSize="30px";
                paragraph.addEventListener('click',func2);
                function func2(){
                    paragraph.style.textDecorationLine="line-through";
                    paragraph.style.color="rgb(137, 130, 130)";
                 
                }
                paragraph.addEventListener('dblclick',func3);
                function func3(){
                    paragraph.style.textDecorationLine="none";
                    paragraph.style.color="black";
                 
                }

                var text=document.createTextNode(text2);
                paragraph.appendChild(text);
                taskdiv.appendChild(paragraph);
             }
         }
        
        heading.appendChild(node);
        taskdiv.appendChild(heading);
        
        taskdiv.classList.add("task");
        taskdiv.id=key;

        key++;
        document.getElementsByClassName("container")[0].append(taskdiv);
    }
}


