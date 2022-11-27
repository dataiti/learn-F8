const draggables = document.querySelectorAll('.draggable')
const boxes = document.querySelectorAll('.box')
let currentDraggable

draggables.forEach(function(draggable, index) {
    draggable.addEventListener('dragstart', function(e) {
        this.classList.add('dragging')
        currentDraggable = draggable
    })
    draggable.addEventListener('dragend', function(e) {
        this.classList.remove('dragging')
    })
})

boxes.forEach(function(box) {
    console.log(box)
    box.addEventListener('dragenter', function(e) {
        e.preventDefault()
    })
    box.addEventListener('drop', function() {
        if(!box.querySelector('.draggable')) {
            this.appendChild(currentDraggable)
        }
    })
})
