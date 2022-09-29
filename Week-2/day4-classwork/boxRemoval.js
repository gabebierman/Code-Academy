//! Steps

    
    


// function clickDiv(){
//     let ldivID = ; //find div id , strip and find number, log number
//     let rdivID = document.getElementById("r"[ldivID]); //search for div id by inserting number from l div id document.getElementByID("r[ldivID]")
//     if (style.display = "block"){
//         document.getElementById(rdiv).style.display = "none"
//     }
//     else if (style.display = "none"){
//         document.getElementById(rdiv).style.display = "block"
//     }
// }

// document.getElementsByClassName("leftDiv").addEventListener("click", clickDiv)



// grab all of the red divs

const leftDivs = document.querySelectorAll(".leftDiv");

// add click event listner to red divs 

leftDivs.forEach(div => {
    div.addEventListener("click" , (e) => {

        // figure out whcih red div was clicked   

        const clickedDiv = e.target;
        const id = "r" + clickedDiv.innerText;

        // find a way to correspond the red dive to matching orange div

        const rdivID = document.getElementById(id);

        // check if orange div is there or not
        //* if true, remove disply: none;
        
        // rdivID.style.display = rdivID.style.display === "none" ? "block" : "none"; //try and do more stuff like this
        
        
        if (rdivID.style.display === "none"){
            rdivID.style.display = "block"
        }
        //! if false, create new div and append display: block;

        else {
            rdivID.style.display = "none"
        }
    })
})
