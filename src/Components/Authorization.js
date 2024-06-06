import React , { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

const Authrization = ({ handleLogin, showModal, handleClose, isLogin, toggleForm }) => {
  
    const [email, setEmail] = useState(''); // Состояние для email
    const [password, setPassword] = useState(''); // Состояние для password
    
    return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? 'Войти' : 'Регистрация'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLogin ? (
          // Форма входа
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Введите почту"   value={email}   onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="fromBasicPassword" className="mb-3">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="запомнить меня" />
            </Form.Group>
            <div className="mt-3">
              Нет аккаунта? <span className="link-primary" onClick={toggleForm}>Зарегистрироваться</span>
            </div>
          </Form>
        ) : (
          // Форма регистрации
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Введите почту" />
            </Form.Group>
            <Form.Group controlId="fromBasicPassword" className="mb-3">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Form.Group controlId="fromBasicPasswordRepeat" className="mb-3">
              <Form.Label>Повторите пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль еще раз" />
            </Form.Group>
            <div className="mt-3">
              Уже есть аккаунт? <span className="link-primary" onClick={toggleForm}>Войти</span>
            </div>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleLogin(email, password)}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Authrization;
