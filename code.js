    const button = document.querySelector("button");
    button.addEventListener("click", rolldice);
    function rolldice()
    {
        let a = parseInt(Math.random()*6)+1;
        let b = parseInt(Math.random()*6)+1;
        const para = document.createElement("p");
        para.textContent = "Dice one: "+a+" Dice two: "+b+" Both dice: "+(a+b);
        document.body.appendChild(para);

    }
