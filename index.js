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
            <div class="color-palette" style="background-color:${color.hex.value};"></div>
            <p class="hex-value"  style="background-color:${color.hex.value};">${color.hex.value}</p>
            `}).join("")
        document.getElementById("colors").innerHTML = htmlData
        })
    }
    renderColors()
