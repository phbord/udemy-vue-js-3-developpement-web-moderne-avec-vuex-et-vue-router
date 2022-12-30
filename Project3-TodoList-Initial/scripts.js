var todos = [];

const handlingForms = {
  data() {
    return {
      todos: window.todos,
      newTodo: { isDone: false },
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = { isDone: false };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("This field must be filled")
      }
    },
/*     storeTodos: function() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } */
  },
  created() {
    this.todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos')) 
      : this.todos;
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
};

Vue.createApp(handlingForms).mount('#app');