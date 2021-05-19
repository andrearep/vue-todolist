

const app = new Vue({
    el: "#root",

    data: {
        todoList: [],
        toDo: ''
    },
    methods: {
        add: function add() {
            if (this.toDo != "") {
                this.todoList.push(this.toDo);
                console.log(this.todoList);
                this.toDo = "";
            }
        }
    }
})

