const app = new Vue({
    el: '#app',
    data: {
      valueInput: '',
      needDoList: []
    },
    methods: {
        addTask () {
            if(this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput
            });
            this.valueInput = '';
        }, 

        completeTask (index) {
            this.needDoList.splice(index, 1);
        }
    }
  });


 


//   Vue.createApp({
//     data() {
//       return {
//         valueInput: '',
//         needDoList: []
//       };
//     },
//     methods: {
//       handleInput (event) {
//         this.valueInput = event.target.value;
//       },
//       addTask () {
//         if(this.valueInput === '') { return };
//         this.needDoList.push({
//           title: this.valueInput,
//           id: Math.random()
//         });
//         this.valueInput = '';
//       }
//     }
//   }
//   ).mount('#app');
