const mode = document.getElementById("mode")
const hex = document.getElementById("hex")

    mode.addEventListener("change",()=>{
        renderColors()
    })
    hex.addEventListener("change",()=>{
        renderColors()
    })


    function renderColors(){
        fetch(`https://www.thecolorapi.com/scheme?hex=${hex.value.slice(1)}&mode=${mode.value}`)
    .then(res => res.json())
    .then(data=>{
        const htmlData = data.colors.map(color=>{ return `
            <div class="color" style="background-color:${color.hex.value};"><span class="color-hex">${color.hex.value}</span></div>
            `}).join("")
        document.getElementById("colors").innerHTML = htmlData
        })
    }
    renderColors()
