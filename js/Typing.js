function type(text, speed, element){
    
    let index = 0;
    element.innerHTML = "";
    typer()
    async function typer(){
        if (index < text.length){
            element.innerHTML += text.charAt(index);
            index++;
            await setTimeout( typer, Math.random() * speed + speed/2)
        }
    }  
}

const typer = type(document.querySelector(".description .typer").innerHTML, 200, document.querySelector(".description .typer"))