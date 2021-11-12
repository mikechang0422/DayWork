let startX
let startWidth = localStorage.getItem('scalable_width') || getScalableDivWidth()


function getScalableDivWidth() {
    return parseInt(window.getComputedStyle(document.querySelector('.scalable')).width, 10)
}

function startDrag(e){
    startX = e.clientX
    startWidth = getScalableDivWidth()
    document.documentElement.addEventListener('mousemove', onDrag)
    document.documentElement.addEventListener('mouseup', stopDrag)
}

function onDrag(e){
    let newWidth = startWidth + e.clientX - startX
    document.querySelector('.scalable').style.width = newWidth + 'px'
}

function stopDrag(){
    localStorage.setItem('scalable_width', getScalableDivWidth())
    document.documentElement.removeEventListener('mousemove', onDrag)
    document.documentElement.removeEventListener('mouseup', stopDrag)
}

document.querySelector('.separator').addEventListener('mousedown',startDrag)
document.querySelector('.scalable').style.width = startWidth + 'px'