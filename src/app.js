const app = Vue.createApp({
    data() {
        return {
            task: [],
            todo: [],
            title: '',
            isShow: false,
            id: '',
            editted: "",
        }
    },

    methods: {
        addTask(){
            const newTask={
                id: Date.now(),
                title: this.title
            }
            console.log(this.title);

            if (!newTask.title.length){
                console.log(this.title);
                alert("Please enter a title")
            }else{
                this.task.push(newTask)
            }
            this.title = ""
            console.log(this.task);
        },

        remove(val){
            for (let i in this.task){
                if (this.task[i].id == val){
                    this.task.splice(i, 1)
                }
            }
        },

        done(val){
            for (let i in this.task){
                if (this.task[i].id == val){
                    let x = this.task.splice(i, 1)
                    this.todo.push(x)
                }
            }
        },

        edit(val){
            this.isShow = true;
            this.id = val;
            this.editted = "";
        },

        check(val){
            for (let i in this.task){
                if (this.task[i].id == val){
                    this.task[i].title = this.editted;
                    this.id = "id";
                }
            }
        }
    }
});

app.mount(document.querySelector('#root'));