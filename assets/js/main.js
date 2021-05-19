

const app = new Vue({
    el: "#root",

    data: {
        todoList: [],
        recycleBin: [],
        completedList: [],
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

        todoListToTrash: function todoListToTrash(index) {
            console.log(index);
            this.recycleBin.push(this.todoList[index])
            this.todoList.splice(index, 1)
        },

        todoListToCOmplete: function todoListToCOmplete(index) {
            console.log(index);
            this.completedList.push(this.todoList[index])
            this.todoList.splice(index, 1)
        }




    }
})

