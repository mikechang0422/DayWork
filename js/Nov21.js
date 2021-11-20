let deg = 6
let hr = document.querySelector('#hr')
let mn = document.querySelector('#mn')
let sc = document.querySelector('#sc')

//setInterval 固定時間就去執行一次 這邊沒有寫則是1毫秒就執行一次
setInterval(()=>{

    let day = new Date()//獲取當前時間
    let hh = day.getHours() * 30//1小時30度
    let mm = day.getMinutes() * deg//1分6度
    let ss = day.getSeconds() * deg//1秒6度
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`//當前小時*30+當前分鐘度數
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

})
