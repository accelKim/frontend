import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MissionComponent2 = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/mission');
        const fetchedMissions = response.data;


        // 최대 8개의 미션만 가져오도록 수정
        const limitedMissions = fetchedMissions.slice(0, 8);

        setMissions(limitedMissions);
      } catch (error) {
        console.error('미션 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row xs={1} md={4} className="g-5" style={{maxWidth:'1100px'}}>
      {missions.map((mission, index) => (
         <Col key={index}>
        <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src={mission.image} />
      <Card.Body>
        <Card.Title>{mission.text}</Card.Title>
        <Button variant="success" style={{color:'white'}}>참여하기</Button>
      </Card.Body>
    </Card>
    </Col>
      ))}
    </Row>
  );
};

export default MissionComponent2;