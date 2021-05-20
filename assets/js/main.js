
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
        // L'utente puó inserire nuove tasks
        add: function add() {
            if (this.toDo != "") {
                this.todoList.push(this.toDo);
                console.log(this.todoList);
                this.toDo = "";
            } else {
                return false;
            }
        },
        //quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
        todoListToTrash: function todoListToTrash(index) {
            console.log(index);
            this.recycleBin.push(this.todoList[index])
            this.todoList.splice(index, 1)
        },

        //vuole anche poter indicare che la task é stata completata(con un icona cliccabile)
        todoListToCOmplete: function todoListToCOmplete(index) {
            console.log(index);
            this.completedList.push(this.todoList[index])
            this.todoList.splice(index, 1)
        },

        //se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
        completeToTodo: function completeToTodo(index) {
            this.todoList.push(this.completedList[index])
            this.completedList.splice(index, 1)
        },

        //vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio. */
        trashToTodo: function trashToTodo(index) {
            this.todoList.push(this.recycleBin[index])
            this.recycleBin.splice(index, 1)
        },

        //si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
        emptyTrash: function emptyTrash() {
            if (this.recycleBin.length > 0) {
                return this.recycleBin = [];
            } else {
                return false
            }
        }


    },
    // Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera. Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
    mounted() {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.add();
            }
        })
    }
})

