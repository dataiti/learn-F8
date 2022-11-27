const prevBtn = document.querySelector('.control.prev-btn')
const nextBtn = document.querySelector('.control.next-btn')
const slideImage =document.querySelector('.slide-images')
const listImages = document.querySelectorAll('.slide-images img')
const listDot = document.querySelectorAll('.list-dot .dot')

const slideShow = {
    currentIndex: 0,
    changeSlide: function(index) {
        const dotActive = document.querySelector('.dot.active')
        if(dotActive) {
            dotActive.classList.remove('active')
        }
        listDot[index].classList.add('active')
        slideImage.style.transform = `translateX(${index * -100}%)`
    },
    handleEvent: function() {
        const _this = this
        listImages.forEach(function(img, index) {
            listDot[index].addEventListener('click', function() {
                _this.currentIndex = index
                _this.changeSlide(index)
            })
        })
    },
    nextSlide: function() {
        const _this = this
        nextBtn.addEventListener('click', function() {
            _this.currentIndex++
            if(_this.currentIndex > listImages.length - 1) {
                // _this.currentIndex = 0
                return
            }
            _this.changeSlide(_this.currentIndex)
        })
    },
    prevSlide: function() {
        const _this = this
        prevBtn.addEventListener('click', function() {
            _this.currentIndex--
            if(_this.currentIndex < 0) {
                // _this.currentIndex = listImages.length - 1
                return
            }
            _this.changeSlide(_this.currentIndex)
        })
    },
    autoChangeSlide: function() {
        const _this = this
        setInterval(function() {
            _this.currentIndex++
            if(_this.currentIndex > listImages.length - 1) {
                _this.currentIndex = 0
            }
            _this.changeSlide(_this.currentIndex)
        }, 4000)
    },
    main: function() {
        this.handleEvent()
        this.nextSlide()
        this.prevSlide()
        this.autoChangeSlide()
    }
}

slideShow.main()