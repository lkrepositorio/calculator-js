const display = document.querySelector("#display");
const buttons  = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "="){
            display.value = eval(display.value);
        }
        else if (btn.id === "ac"){
            display.value = "";
        }else if (btn. id == "de"){
            display.value = display.value.slice(0,-1);
        }else {
            display.value += btn.id
        }
    })
})


/*
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">0</button>
*/