

const todolist = ["Spaghetti Sauce", "Bread", "Oatmeal"];

let input = prompt("What Do you want to do?");

while(input !== "quit" & input !== "q"){



    if(input === "add"){


        console.log("***************** + *****************");

        console.log("CURRENT ITEMS ON THE SHOPPING LIST:")

            for(let i = 0; i < todolist.length; i++){
                console.log(`Index ${i}: ${todolist[i]}`);
                
            }

        console.log("***************** + *****************");


        let newInput = prompt("What item do you want to add?");

        todolist.push(newInput);

        console.log(`${newInput} is added to the list!`);    




    }




    if(input === "view"){
        console.log("***************** + *****************");

        console.log("CURRENT ITEMS ON THE SHOPPING LIST:")

            for(let i = 0; i < todolist.length; i++){
                console.log(`Index ${i}: ${todolist[i]}`);
                
            }

        console.log("***************** + *****************");

    }



    if(input === "remove"){


        console.log("***************** + *****************");

        console.log("CURRENT ITEMS ON THE SHOPPING LIST:")
        console.log("ENTER THE INDEX # OF THE ITEM YOU WANT TO DELETE:");

            for(let i = 0; i < todolist.length; i++){
                console.log(`Index ${i}: ${todolist[i]}`);
                
            }

        console.log("***************** + *****************");
        
        let deleteInput = parseInt(prompt("Enter Index # of the item that you want to delete"));

   
            if(deleteInput !== Number.isNaN){

                let deleted = todolist.splice(deleteInput, 1);

                console.log(`${deleted[0]} is now deleted!`);

            }else{
                deleteInput = parseInt(prompt("Please enter valid Index!"));
            }
    



    }

    input = prompt("What Do you want to do?");

    
}
console.log("You Quit Shopping!");