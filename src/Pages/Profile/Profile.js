import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';

export const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Имя пользователя',
    status: 'Статус',
    avatarUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    isEditing: false
  });

  const handleEdit = () => {
    setProfileData({ ...profileData, isEditing: true });
  };

  const handleSave = () => {
    setProfileData({ ...profileData, isEditing: false });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={4} style={{ padding: '50px 0 0 50px' }}>
          <Image src={profileData.avatarUrl} roundedCircle style={{ width: '250px', height: '250px', marginLeft: '200px' }} />
        </Col>
        <Col xs={12} md={8} style={{ paddingLeft: '100px' }}>
          {profileData.isEditing ? (
            <>
              <Form.Control
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                style={{ color: '#eeeeee', fontWeight: 'bold', marginLeft: '50px', marginBottom: '10px' }}
              />
              <Form.Control
                type="text"
                name="status"
                value={profileData.status}
                onChange={handleChange}
                style={{ color: '#eeeeee', marginLeft: '50px' }}
              />
              <Button onClick={handleSave} style={{ marginLeft: '50px', marginTop: '10px' }}>Сохранить</Button>
            </>
          ) : (
            <>
              <h2 style={{ color: '#eeeeee', fontWeight: 'bold', marginLeft: '50px' }}>{profileData.name}</h2>
              <p style={{ color: '#eeeeee', marginLeft: '50px' }}>{profileData.status}</p>
              <Button onClick={handleEdit} style={{ marginLeft: '50px' }}>Редактировать профиль</Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
