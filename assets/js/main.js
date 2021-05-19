

const app = new Vue({
    el: "#root",

    data: {
        todoList: [],
        toDo: '',
        hide: false
    },
    methods: {
        add: function add() {
            if (this.toDo != "") {
                this.todoList.push(this.toDo);
                console.log(this.todoList);
                this.toDo = "";
            } else {
                return false;
            }
        },




    }
})

