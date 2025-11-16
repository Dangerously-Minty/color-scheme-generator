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
            <div class="color">
                <div style="width:110px;height:415px;background-color:${color.hex.value};"></div>
                <div class="color-hex">${color.hex.value}</div>
            </div>
            `}).join("")
        document.getElementById("colors").innerHTML = htmlData
        })
    }
    renderColors()
