const uuid = require("uuid");
const path = require("path");
const {Titles, Chapters} = require('../models/Models');
const ApiError = require("../error/ApiError");
const CyrillicToTranslit = require("cyrillic-to-translit-js");

class TitleController {

    // Создание нового произведения
    async create(req, res, next) {
        try { 
            // Получаем информацию о произведении из тела запроса
            // Получаем: название, описание, автора, студию, обложку
            const {name, description, author, studio} = req.body;
            const {img} = req.files;

            // Преобразуем русские символы в латиницу, 
            // состваляем новое имя обложки и сохраняем в static.
            const cyrillicToTranslit = new CyrillicToTranslit();
            let fileName = cyrillicToTranslit.transform(name, "_") + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName), (err) => {
                if (err) console.log(err);
                else console.log("File Uploaded");
            });

            // Сохраняем произведение в базе данных
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

            // Отправляем информацию о произведении на клиента
            return res.json(titles);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async createWithoutStatic(req, res, next) {
        try {
            const {name, description, author, studio, img} = req.body;

            const titles = await Titles.create({
                name: name,
                description: description,
                author: author,
                studio: studio,
                rating: 0.0,
                amount_of_ratings: 0,
                chapters: 0,
                img: img
            });

            return res.json(titles);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    // Получение всех глав произведения
    async getAll(req, res) {
        const titles = await Titles.findAll();
        return res.json(titles);
    }

    // Получение произведения по его ID
    async getOneById(req, res) {
        const {id} = req.params;
        const title = await Titles.findOne(
            {
                where: {id}
            },
        )

        return res.json(title);
    }

    // ДОРАБОТАТЬ ПОИСК ПО ИМЕНИ
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

    // Получение глав произведения
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

    // Получение главы произведения
    async getChapter (req, res, next) {
        const title = await Titles.findByPk(req.params.id);

        if(!title) {
            next(ApiError.notFound('Произведение не найдено'));
        }

        const chapter = await Chapters.findByPk(req.params.id_chapter);

        if(!chapter) {
            next(ApiError.notFound('Глава не найдено'));
        }

        if (chapter.id_titles !== title.id) {
            next(ApiError.badRequest("Глава не принадлежит этому произведению"));
        }

        return res.json(chapter);
    }

    // Добавление новой главы произведения
    async createChapter(req, res) {
        try {
            const { id, number, name } = req.body;

            const { files } = req.files;

            // Проверка: Загружены ли файлы?
            if (!files || files.length === 0) {
                return next(ApiError.badRequest('Файлы не загружены.'));
            }
            
            const cyrillicToTranslit = new CyrillicToTranslit();
            // Извлечение имен файлов из запроса
            const fileNames = [];
            for (let file of files) {
                let fileName = file.name + "_" + cyrillicToTranslit.transform(name, "_") + ".jpeg";
                file.mv(path.resolve(__dirname, '..', 'static', fileName), (err) => {
                    if (err) console.log(err);
                    else console.log("Файл загружен");
                });

                fileNames.push(fileName);
            }

            const chapter = await Chapters.create({
                id_titles: id,
                number: number,
                name: name,
                pages: fileNames,
            });

            return res.json(chapter);
            
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new TitleController();