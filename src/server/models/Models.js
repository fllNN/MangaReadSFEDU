import { Sequelize, DataTypes } from "sequelize";
const config = require("config");

const sequelize = new Sequelize(config.get('dbURL'));

export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

export const Titles = sequelize.define('titles', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    studio: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    rating: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    amount_of_ratings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chapters: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
});

export const Comments = sequelize.define('comments', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_title: {
      type: DataTypes.BIGINT,
    },
    at_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    at_updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
});

export const Chapters = sequelize.define('chapters', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_titles: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    pages: {
      type: DataTypes.JSON,
      allowNull: false,
    },
});

export const Genres = sequelize.define('genres', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
});

export const Page = sequelize.define('page', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_chapter: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
});

export const Reading = sequelize.define('reading', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_title: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_chapter: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    at_reading: {
      type: DataTypes.DATE,
      allowNull: false,
    },
});

export const TitelesChapter = sequelize.define('titele_chapter', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_titles: {
      type: DataTypes.BIGINT,
    },
    id_chapters: {
      type: DataTypes.BIGINT,
    },
});

export const TitleGenres = sequelize.define('title_genres', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_title: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_genre: {
      type: DataTypes.INTEGER,
    },
});

