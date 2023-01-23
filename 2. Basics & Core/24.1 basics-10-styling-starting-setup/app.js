const app = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        };
    },
    computed: {             // это нужно если большой код и из html убрать , вычисляемое св-во
        boxAClasses() {
            return { active: this.boxA}
        }
    },
    methods: {          //методы создаются для того, чтобы в html можно было нажимать на div.
        boxSelected(box) {
            if (box === 'A') {
                this.boxA = !this.boxA;     // при помощи !this.boxA можно снимать с ставить выделение, благодаря !  - т.к. идет проверка 
            }   else if (box === 'B') {
                this.boxB = !this.boxB;
            }   else if (box === 'C') {
                this.boxC = !this.boxC;
            }
        }
    }
});

app.mount('#styling');