import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const CommentsSection = () => {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentInput.trim()) {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    };

    return (
        <Container style={{
            borderRadius: '0px', // Скругление углов
            height: '250px', // Фиксированная высота блока
            width: '650px', // Ширина блока уменьшена в два раза
            position: 'relative' // Относительное позиционирование для кнопки
        }}>
            <h2 style={{color: '#eeeeee'}}>Комментарии</h2>
            <Form onSubmit={handleCommentSubmit}>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Оставьте комментарий..."
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        style={{
                            backgroundColor: '#9A9A9A', // Цвет фона по умолчанию
                            color: '#eeeeee', // Цвет текста
                            borderColor: 'transparent' // Цвет границы
                        }}
                        onFocus={(e) => e.target.style.backgroundColor = '#DCDCDC'} // Цвет фона при фокусировке
                        onBlur={(e) => e.target.style.backgroundColor = '#9A9A9A'} // Цвет фона когда элемент не в фокусе
                    />
                </Form.Group>
                <Button type="submit" style={{
                    right: '10px', // Сдвиг вправо
                    marginTop: '10px' // Отступ сверху от блока комментариев
                }}>
                    Отправить
                </Button>
            </Form>
            <ListGroup>
                {comments.map((comment, index) => (
                    <ListGroup.Item key={index}>{comment}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default CommentsSection;
