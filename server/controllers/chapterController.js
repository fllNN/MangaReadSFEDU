const uuid = require("uuid");
const path = require("path");
const { Chapters } = require('../models/Models');
const ApiError = require("../error/ApiError");

class ChapterController {
    async create(req, res, next) {
        try {
            const { id_titles, number, name } = req.body;

            if (!req.files || Object.keys(req.files).length === 0) {
                return next(ApiError.badRequest('Файлы не загружены.'));
            }
            
              // Извлечение имен файлов из запроса
            const fileNames = [];
            for (const file of Object.values(req.files)) {
                let fileName = uuid.v4() + ".jpg";
                file.mv(path.resolve(__dirname, '..', 'static', fileName), (err) => {
                    if (err) console.log(err);
                    else console.log("Файл загружен");
                });

                fileNames.push(file.name);
            }

            const chapter = await Chapters.create({
                id_titles: id_titles,
                number: number,
                name: name,
                pages: fileNames,
            });

            return res.json(chapter);
            
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
    async getAll(req, res) {
        const { id_titles } = req.body;

        const chapters = await Chapters.findAll({
            where: {
                id_titles: id_titles
            }
        });
        return res.json(chapters);
    }
    async getOne(req, res) {
        const { id, id_titles } = req.body;

        const chapters = await Chapters.findAll({
            where: {
                id_titles: id_titles,
                id: id
            }
        });
        return res.json(chapters);
    }
}