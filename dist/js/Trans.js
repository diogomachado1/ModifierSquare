new Vue({
    el: "#app",
    data: {
        br: '0%',
    },
    methods: {
        trans(){
            let toggle = false
            let n = 0
            setInterval(() => {
                document.getElementById(1).style.borderRadius=`${n}%`
                console.log(n)
                if(n == 100 || n==-1){
                    toggle = !toggle
                }
                if(!toggle){
                    n++
                }else{
                    n--
                }  
            }, 20)
        }
    },
})