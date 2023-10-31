const Todos = require('../models/Todos')

module.exports = {
    getAllTodo: (req, res) => {
        res.json({
            message: "Berhasil mendapatkan data Todo",
            data: Todos
        })
    },
    getTodoById: (req, res) => {
        const todo = Todos.find(todo => todo.id == id)

        res.json({
            message: "Berhasil mendapatkan todo by id",
            data: todo
        })
    },
    addTodo: (req, res) => {

    },
    editTodoById: (req, res) => {

    },
    deleteTodoById: (req, res) => {

    },
}