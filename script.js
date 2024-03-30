// const item=document.querySelector("#item");
// const toDoBox=document.querySelector("#to-do-box");

// item.addEventListener(
//     "keyup",
//     function(event){
// if(event.key=="Enter"){
//     addToDo(this.value)
//     this.value="";
// }
//     }
// )

// const addToDo=(item)=>{
//     const listItem=document.createElement("li");
//     listItem.innerHTML=`
//    ${item}
//     <i class="fas fa-times"></i>`;

//     listItem.addEventListener("click",function(){
//         this.classList.toggle("done")
//     })
//     listItem.querySelector("i").addEventListener("click",function(){
//         listItem.remove();
//     })
//     toDoBox.appendChild(listItem);
// }



const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addToDo(this.value);
        this.value = "";
    }
});

const addToDo = (itemText) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${itemText} <i class="fas fa-times"></i>`;
    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
    });

    // Add event listener for removing the to-do item
    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();
    });

    // Add event listener for updating the to-do item text
    listItem.addEventListener("dblclick", function() {
        const newText = prompt("Enter new text for the to-do item", this.innerText.trim());
        if (newText !== null && newText !== "") {
            this.innerText = newText;
            // Append the cross icon for updated items
            this.innerHTML += ' <i class="fas fa-times"></i>';
            // Add event listener for removing the updated to-do item
            this.querySelector("i").addEventListener("click", function() {
                listItem.remove();
            });
        }
    });

    toDoBox.appendChild(listItem);
};
