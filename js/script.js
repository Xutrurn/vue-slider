// alert("Hello world");

var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    immagini: [
      "https://poly.googleusercontent.com/downloads/c/fp/1597139692669403/6wCFRIpEKVx/7dDx9JAh2Ni/tour/454f2690-9576-2777-6dc4-d8e9407e0150/sight_1590938563218.jpg",
      "https://c0.wallpaperflare.com/preview/1/713/103/architecture-asia-building-castle.jpg",
      "https://www.newzealand.com.au/image.php?file=/art/rta/archive/nz/Fiordland/Real_Journeys/Milford_Nature_Cruise/Milford_Sound_Nature_Cruise.jpg",
      "https://www.newzealand.com.au/art/rta/archive/at/Abel_Tasman.jpg"
    ],
    intervallo: ''
  },
  created() {
    this.intervallo = setInterval(this.nextPhoto, 2000);
  },
  mounted() {
    window.addEventListener('keydown', this.tastiera)
  },
  methods: {
    nextPhoto() {
      (this.counter == (this.immagini.length - 1)) ? this.counter = 0: this.counter++;
    },
    prevPhoto() {
      (this.counter < 1) ? this.counter = (this.immagini.length - 1): this.counter--;
    },
    cambiaPhoto(indice) {
      this.counter = indice;
      clearInterval(this.intervallo);
    },
    tastiera() {
      if (event.keyCode === 39) {
        this.nextPhoto()
        clearInterval(this.intervallo);
      } else if (event.keyCode === 37) {
        this.prevPhoto()
        clearInterval(this.intervallo);
      }
    }
  }
});








// console.log();
