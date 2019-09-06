const { ipcRenderer } = require('electron');
const SI = require('systeminformation');

const pcname = document.getElementById('pcname')
const osversion = document.getElementById('osversion')
const cpu = document.getElementById('cpu')
const graphics = document.getElementById('graphics')

let stateData = new Object;


document.getElementById('register-form').addEventListener('submit', e=>{
    e.preventDefault()
    const Target = e.target

    for (let i = 0; i < Target.length-1; i++) {
        stateData[Target[i].name] =Target[i].value        

        
    }
    ipcRenderer.send('channel-send-licensekey',stateData)
})



SI.osInfo()
    .then(data=>{
        pcname.value = data.hostname
        osversion.value = `${data.codename} Version ${data.release}`                
    })
SI.graphics()
    .then(data=>{
        graphics.value = data.controllers[0].model
    })
SI.cpu()
    .then(data=>{
        cpu.value = `${data.speed} ${data.manufacturer} ${data.brand}`
    })