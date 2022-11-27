const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    songs: [
        {
            name: "Cưới Thôi",
            singer: "Masew, Masiu",
            path: "./path/CuoiThoi.mp3",
            image: "./img/cuoithoi.jfif"
        },
        {
            name: "Ngày Đầu Tiên",
            singer: "Ngày Đầu Tiên - Đức Phúc",
            path: "./path/NgayDauTien.mp3",
            image: "./img/NgayDauTien.jpg"
        },
        {
            name: "Phi Hành Gia",
            singer: "Renja, Slow T, Lil Wuyn",
            path: "./path/PhiHanhGia.mp3",
            image: "./img/PhiHanhGia.jpg"
        },
        {
            name: "Nàng Thơ",
            singer: "Hoàng Dũng",
            path: "./path/NangTho.mp3",
            image: "./img/nangtho.jfif"
        },
        {
            name: "Muộn Rồi Mà Sao Còn",
            singer: "Sơn Tùng M-TP",
            path: "./path/MuonRoiMaSaoCon.mp3",
            image: "./img/MuonRoiMaSaoCon.jpg"
        },
        {
            name: "Đau Nhất Là Lặng Im",
            singer: "ERIK",
            path: "./path/DauNhatLaLangIm.mp3",
            image: "./img/DauNhatLaLangIm.jpg"
        },
        {
            name: "Sài Gòn Đau Lòng Quá",
            singer: "Hứa Kim Tuyền, Hoàng Duyên",
            path: "./path/SaiGonDauLongQua.mp3",
            image: "./img/SaiGonDauLongQua.jfif"
        },
        {
            name: "Tình Ca Tình Ta",
            singer: "Kis",
            path: "./path/TinhCaTinhTa.mp3",
            image: "./img/TinhCaTinhTa.jpg"
        },
        {
            name: "Va Vào Giai Điệu Này",
            singer: "MCK",
            path: "./path/VaVaoGiaiDieuNay.mp3",
            image: "./img/VaVaoGiaiDieuNay.jpg"
        }
    ],
    // setConfig: function (key, value) {
    //     this.config[key] = value;
    // },
    render: function () {
        const _this = this
        const htmls = this.songs.map(function (song, index) {
            return `
                <div class="song ${index === _this.currentIndex ? "active" : ""}" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('')
        
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        });
    },
    handleEvents: function () {
        const _this = this
        const cdWidth = cd.offsetWidth
        // Syntax: (selector).animate({styles},{options})
        const cdThumbAnimate = cdThumb.animate({ transform: "rotate(360deg)"}, {
            duration: 10000,
            iterations: Infinity
        });
        cdThumbAnimate.pause()
        playBtn.onclick = function() {
            if(!_this.isPlaying) {
                audio.play()
            } else {
                audio.pause()
            }
        }
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            if(newCdWidth > 0) {
                cd.style.width = `${newCdWidth}px`
            } else {
                cd.style.width = 0
            }
            cd.style.opacity = newCdWidth / cdWidth
        }
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
        }
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()

        }
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100)
                progress.value = progressPercent
            }
        }
        progress.onchange = function() {
            const seekTime = this.value / (1 / audio.duration * 100)
            audio.currentTime = seekTime
        }
        randomBtn.onclick = function() {
            if(_this.isRandom) {
                _this.isRandom = false
                this.classList.remove('active')
            } else {
                _this.isRandom = true
                this.classList.add('active')
            }
        }
        repeatBtn.onclick = function() {
            if(_this.isRepeat) {
                _this.isRepeat = false
                this.classList.remove('active')
            } else {
                _this.isRepeat = true
                this.classList.add('active')
            }
        }
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                if(_this.isRandom) {
                    _this.randomSong()
                } else {
                    _this.nextSong()
                }
                audio.play()
                _this.render()
            }
        }
    },
    loadCurrentSong: function() {
        cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
        heading.innerText = this.currentSong.name
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex > this.songs.length-1) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1
        }
        this.loadCurrentSong()
    },
    randomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function () {
        this.render()
        this.defineProperties()
        this.handleEvents()
        this.loadCurrentSong()
    }
};

app.start();
