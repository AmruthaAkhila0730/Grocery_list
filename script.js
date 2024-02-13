        function add(){
            var input = document.getElementById("input");
            var item = input.value;

            // if (item!==""){
                if (item){
                var list = document.getElementById("items");
                var li = document.createElement("li");
                // li.append(document.createTextNode(item));

                var deleteBtn = document.createElement("button");
                // deleteBtn.textContent = "X";
                deleteBtn.innerHTML= "&#128465;";
                deleteBtn.className="delete";
                deleteBtn.title= "Remove item.."
                deleteBtn.addEventListener("click", function() {
                    li.remove();
                });

                var editBtn = document.createElement("button");
                // editBtn.textContent = "&#9998;";
                editBtn.onclick = "editmode();";
                editBtn.innerHTML = "&#9998;";
                editBtn.title = "Edit item..";
                editBtn.className = "edit";
                var editing = false;
                editBtn.addEventListener("click", function editmode(){
                    // li.contentEditable = true;
                    editBtn.contentEditable = false;
                    deleteBtn.contentEditable = false;
                    if(editing){
                        editBtn.style.backgroundColor = "white";
                        editBtn.innerHTML = "&#9998;";
                        editBtn.disabled = true;
                        li.title = "already edited..";
                        editBtn.style.cursor = "not allowed";
                        editBtn.style.pointerEvents = "none";
                        li.contentEditable = false;
                    }else{
                        editBtn.style.backgroundColor = "green";
                        editBtn.title = "on editing mode..";
                        editBtn.innerHTML = "&#128190;";
                        li.contentEditable = true;

                    }
                    editing = true;
                });

                var span = document.createElement("span");
                span.textContent = item;
                span.addEventListener("click", function() {
                li.classList.toggle("done");
                });

                li.appendChild(span);
                li.appendChild(deleteBtn);
                li.appendChild(editBtn);
                list.append(li);
                input.value = "";
            }
        }