const {Titles} = require('../models/Models');

class TitleController {
    async create(req, res) {
        const {name} = req.body;
        const {description} = req.body;
        const {author} = req.body;
        const {studio} = req.body;

        const titles = Titles.create({
            name: name,
            description: description,
            author: author,
            studio: studio,
            rating: 0.0,
            amount_of_ratings: 0,
            chapters: 0
        });

        return res.json(titles);
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {
        
    }
}

module.exports = new TitleController();