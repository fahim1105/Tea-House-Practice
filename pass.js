document.getElementById('bro_code_input')
        .addEventListener("keyup", function(event){
            // console.log("fg")
            const passElement = event.target.value
            // console.log(passElement)
            const broCodeLink = document.getElementById('bro_code_link')
            const broCodeBtn = document.getElementById('bro_code_btn')
            // console.log(broCodeLink)
            if (passElement === "Bro-Code"){
                broCodeLink.classList.remove("pointer-events-none", "opacity-50")
                // broCodeBtn.classList.remove("hidden")
            }
            else{
                broCodeLink.classList.add("pointer-events-none", "opacity-50")
            }
        })