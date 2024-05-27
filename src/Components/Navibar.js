import React, { useState, useEffect } from 'react';
import animeHeadIcon from './anih.png';
import { Button, Nav, Navbar, Modal, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles.css'

export default function Navibar() {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // Добавлено новое состояние для отслеживания формы
    const [search, setSearch] = useState(false);

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
                        <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>
                        <Nav.Link as={Link} to="/catalog">Каталог</Nav.Link>
                        {search ? (
                            <FormControl
                                type="text"
                                placeholder="Поиск..."
                                className="mr-sm-2 search-input"
                                autoFocus
                            />
                            ) : (
                            <Button variant="outline-info" onClick={handleSearchToggle} className="search-button">
                                Поиск
                            </Button>
                        )}
                    </Nav>
                    <Nav className="ms-auto">
                        <Button variant="primary" onClick={handleShow}>
                            Войти
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isLogin ? 'Войти' : 'Регистрация'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLogin ? (
                        // Форма входа
                        <Form>
                            <Form.Group controlId="fromBasicEmail" id="emailFormGroup">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Введите почту" style={{backgroundColor: '#eeeeee'}}/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassword" className="mb-3">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" style={{backgroundColor: '#eeeeee'}}/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicCheckbox">
                                <Form.Check type="checkbox" label="запомнить меня" style={{color: '#eeeeee'}}/>
                            </Form.Group>
                            <div className="mt-3">
                                Нет аккаунта? <span className="link-primary" style={{ cursor: 'pointer' }} onClick={toggleForm}>Зарегистрироваться</span>
                            </div>
                        </Form>
                    ) : (
                        // Форма регистрации
                        <Form>
                            <Form.Group controlId="fromBasicEmail" id="emailFormGroup">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Введите почту" style={{backgroundColor: '#eeeeee'}}/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassword" className="mb-3">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" style={{backgroundColor: '#eeeeee'}}/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPasswordRepeat" className="mb-3">
                                <Form.Label>Повторите пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль еще раз" style={{backgroundColor: '#eeeeee'}}/>
                            </Form.Group>
                            <div className="mt-3">
                                Уже есть аккаунт? <span className="link-primary" style={{ cursor: 'pointer' }} onClick={toggleForm}>Войти</span>
                            </div>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                <Link to="/profile">
                    <Button variant="primary">{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}
