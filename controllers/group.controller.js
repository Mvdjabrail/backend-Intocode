const Group = require('../models/Group.model')
const Student = require('../models/Student.model')

module.exports.groupController = {
    postGroup: async (req, res) => {
        try {
            const group = await Group.create({
                group: req.body.group,
                week: req.body.week,
                finish: req.body.finish
            });
            res.json(group);
        } catch (error) {
            res.json("Ошибка при создании группы")
        }
    },
    getGroup: async (req, res) => {
        try {
            const getGroup = await Group.find()
            res.json(getGroup)
        } catch (error) {
            res.json('Ошибка при выводе групп')
        }
    },
    getGroupById: async (req, res) => {
        try {
            const getGroupById = await Group.findById(req.params.id);
            res.json(getGroupById);
        } catch (error) {
            res.json('Ошибка при выводе группы')
        }
    },
    deleteGroup: async (req, res) => {
        try {
            await Group.findByIdAndRemove(req.params.id);
            res.json('Группа удалена')
        } catch (error) {
            res.json('Ошибка при удалении группы')
        }
    },
    patchGroup: async (req, res) => {
        try {
            const patchGroup = await Group.findByIdAndUpdate(req.params.id, {
                group: req.body.group,
                week: req.body.group,
                finish: req.body.finish
            });
            res.json(patchGroup)
        } catch (error) {
            res.json('Ошибка при изменении группы')
        }
    },
    getWeekByGroup: async (req, res) => {
        try {
            const getWeekByGroup = await Group.find({ week: req.params.id });
            res.json(getWeekByGroup)
        } catch (error) {
            res.json('Ошибка при выводе недели')
        }
    },
    getFinishGroup: async (req, res) => {
        try {
            const getFinishGroup = await Group.find({ finish: req.params.id });
            res.json(getFinishGroup)
        } catch (error) {
            res.json('Ошибка при выводе финиша')
        }
    },
    patchOfferByGroup: async (req, res) => {
        try {
            const students = await Student.find({ groupStudent: req.params.id })
            const offer = students.filter(student => student.offer)
            const procent = Math.floor((offer / students) * 100)
            res.json(`${procent} %`)
        } catch (error) {
            res.json(error.message)
        }
    }
}