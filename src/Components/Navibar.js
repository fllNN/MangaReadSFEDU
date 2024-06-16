import React, { useState, useEffect, useNavigate } from 'react';
import animeHeadIcon from './anih.png';
import { Button, Nav, Navbar, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles.css'
import Authrization from './Authorization';
import axios from 'axios';

// const users = [
//     { id: 1, email: 'user1@example.com', password: 'password1', username: 'UserOne' },
//     { id: 2, email: 'user2@example.com', password: 'password2', username: 'UserTwo' },
//     // ... другие пользователи
//   ];

export default function Navibar() {

    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleSearchToggle = () => setSearch(!search);

    // Функция для переключения между формами
    const toggleForm = () => setIsLogin(!isLogin);

    const handleLogoClick = () => {};

    useEffect(() => {
        // Функция для проверки клика вне элемента поиска
        const handleClickOutside = (event) => {
            if (search && !document.querySelector('.search-input').contains(event.target)) {
                setSearch(false);
            }
        };

        // Добавляем слушатель события клика для всего документа
        document.addEventListener('mousedown', handleClickOutside);

        // Удаляем слушатель события при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [search]); // Зависимость от состояния search

    // const handleLogin = (email, password) => {
    //     const user = users.find(u => u.email === email && u.password === password);
    //     if (user) {
    //         setCurrentUser(user);
    //         handleClose(); // Закрыть модальное окно после входа
    //     } else {
    //         // Обработка ошибки входа
    //         alert('Неверный email или пароль');
    //     }
    // };

    const [mangaList, setMangaList] = useState([]); // Состояние для списка манги
    const [searchTerm, setSearchTerm] = useState(''); // Состояние для поискового запроса
    const navigate = useNavigate(); // Хук для программной навигации

    useEffect(() => {
        const fetchMangaData = async () => {
          const response = await fetch('https://raw.githubusercontent.com/fllNN/MangaReadSFEDU/dev-front/recommendationsData.json');
          const mangaData = await response.json();
          setMangaList(mangaData);
        };
    
        fetchMangaData();
      }, []);

      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearchSubmit = () => {
        // Поиск манги по названию
        const foundManga = mangaList.find(manga => manga.title.toLowerCase().includes(searchTerm.toLowerCase()));
        if (foundManga) {
          // Если манга найдена, переходим на её страницу
          navigate(`/manga/${foundManga.id}`);
        }
      };

    const handleLogin = async (email, password) => {
        try {
            // Отправляем POST-запрос на сервер для входа пользователя
            const response = await axios.post('https://raw.githubusercontent.com/fllNN/MangaReadSFEDU/dev-front/users.json', { email, password });
            // Если сервер вернул данные пользователя, сохраняем их и закрываем модальное окно
            if (response.data.user) {
                setCurrentUser(response.data.user);
                handleClose();
            } else {
                // Если данные не вернулись, выводим сообщение об ошибке
                alert('Неверный email или пароль');
            }
        } catch (error) {
            // Обработка ошибок при запросе
            console.error('Ошибка при входе:', error);
            alert('Произошла ошибка при попытке входа');
        }
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="#343434" variant="dark">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '210px' }}>
                    <img
                        src={animeHeadIcon}
                        alt="Anime Head Icon"
                        onClick={handleLogoClick}
                        style={{cursor: 'pointer' }}
                    />
                    <Navbar.Brand as={Link} to="/" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                        MangaRead
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" style={{ marginLeft: '120px' }}> 
                        <Nav.Link as={Link} to="/">Главная</Nav.Link> 
                        {currentUser && <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>}
                        <Nav.Link as={Link} to="/catalog">Каталог</Nav.Link>
                        {search ? (
                                 <FormControl
                                 type="text"
                                 placeholder="Поиск..."
                                 className="mr-sm-2 search-input"
                                 autoFocus
                                 value={searchTerm}
                                 onChange={handleSearchChange}
                                 onKeyPress={event => event.key === 'Enter' && handleSearchSubmit()}
                               />
                            ) : (
                            <Button variant="outline-info" onClick={handleSearchToggle} className="search-button">
                                Поиск
                            </Button>
                        )}
                    </Nav>
                    <Nav className="ms-auto">
                    {
                    currentUser ? (
                        <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <div style={{ color: 'white' }}>
                            {currentUser.email}
                        </div>
                        </Link>
                    ) : (
                        <Button variant="primary" onClick={handleShow}>
                        Войти
                        </Button>
                    )
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Authrization
                showModal={showModal}
                handleClose={handleClose}
                isLogin={isLogin}
                toggleForm={toggleForm}
                handleLogin={handleLogin}
            />
        </>
    );
}
