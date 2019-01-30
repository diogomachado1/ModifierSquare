new Vue({
    el: "#app",
    data: {
        br: '0%',
    },
    mounted: function () {
        this.$nextTick(function () {
           setInterval(()=>{
            this.randomizer('bola')
           },1000)
            
        })
      },
      methods: {
        trans(){
          this.randomizer('bola')
        },
        randomizer(id) {

                let color='#'
                for(let i = 0;i < 6;i++){
                    color+=this.hexadecimal()
                }
                document.getElementById(id).style.backgroundColor = color
        },
        hexadecimal(){
            let r = Math.floor(Math.random() *16)//0 1 2 3 4 5 6 7 8 9 A B C D E F
            switch (r) {
                case 10:
                    return 'A'
                case 11:
                    return 'B'
                case 12:
                    return 'C'
                case 13:
                    return 'D'
                case 14:
                    return 'E'
                case 15:
                    return 'F'
        
                default:
                    return r.toString()
            }
        
        }
    }
})