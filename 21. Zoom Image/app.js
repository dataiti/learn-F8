const zoomer = document.querySelector('.zoomer')
const wrapImg = document.querySelectorAll('.zoomer .image')
const result = document.querySelector('.zoomer .result')

const size = 4

wrapImg.forEach(function(item) {
    item.addEventListener('mousemove', function(e) {
        result.classList.remove('hide')
        const img = item.querySelector('img')
        var x = Math.floor((e.offsetX / this.offsetWidth) * 100)
        var y = Math.floor((e.offsetY / this.offsetWidth) * 100)

        var posX = e.pageX - zoomer.offsetLeft
        var posY = e.pageY - zoomer.offsetTop
        
        console.log(e.offsetX)

        result.style.cssText = `
            background-image: url(${img.src});
            background-size: ${img.width*size} ${img.height*size};
            background-position : ${x}% ${y}%;
            left: ${posX}px;
            top: ${posY}px;
        `
    })
    item.addEventListener('mouseleave', function(e) {
        result.style = ``
        result.classList.add('hide')
    })
})