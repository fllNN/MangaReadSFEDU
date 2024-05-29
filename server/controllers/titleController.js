const uuid = require("uuid");
const path = require("path");
const {Titles, Chapters} = require('../models/Models');
const ApiError = require("../error/ApiError");

class TitleController {
    async create(req, res, next) {
        try {
            const {name, description, author, studio} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName), (err) => {
                if (err) console.log(err);
                else console.log("File Uploaded");
            });

            const titles = await Titles.create({
                name: name,
                description: description,
                author: author,
                studio: studio,
                rating: 0.0,
                amount_of_ratings: 0,
                chapters: 0,
                img: fileName
            });

            return res.json(titles);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res) {
        const titles = await Titles.findAll();
        return res.json(titles);
    }

    async getOneById(req, res) {
        const {id} = req.params;
        const title = await Titles.findOne(
            {
                where: {id}
            },
        )

        return res.json(title);
    }

    // Доработать поиск по имени
    async getOneByName(req, res, next) {
        const {name} = req.params;
        const title = await Titles.findOne(
            {
                where: {name: name}
            },
        )

        if (!title) {
            next(ApiError.notFound("Произведение не найдено"))
        }

        return res.json(title);
    }

    async getChapters(req, res, next) {
        const {id} = req.params;
        const chapters = await Chapters.findAll({
            where: {id_titles: id}
        })

        if(!chapters) {
            next(ApiError.notFound('Список пуст'));
        }

        return res.json(chapters);
    }

    async getChapter (req, res, next) {
        const title = await Titles.findByPk(req.params.id);

        if(!title) {
            next(ApiError.notFound('Произведение не найдено'));
        }

        const chapter = await Chapters.findByPk(req.params.id_chapter);

        if(!chapter) {
            next(ApiError.notFound('Глава не найдено'));
        }

        return res.json(chapter);
    }
}

module.exports = new TitleController();