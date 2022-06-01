const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routs/group.rout'))
app.use(require('./routs/notes.rout'))
app.use(require('./routs/status.rout'))
app.use(require('./routs/student.rout'))


mongoose.connect('mongodb+srv://mvdjabrail:1221@cluster0.5s8s8.mongodb.net/Intocode', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
    console.log('Сервер запущен')
})