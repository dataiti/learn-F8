const foodBtns = document.querySelectorAll('.food-menu button')
const foodList = document.querySelectorAll('.food-item')

foodBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        var active = document.querySelector('.active')
        if(active) {
            active.classList.remove('active')
        }
        this.classList.add('active')
        const typeFood = e.target.getAttribute('type-food')
        foodList.forEach(function(food) {
            if(typeFood == 'all' || food.getAttribute('type-food') == typeFood) {
                food.classList.remove('hide')
            } else {
                food.classList.add('hide')
            }
        })
    })
})
