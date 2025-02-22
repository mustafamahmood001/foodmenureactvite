import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardData = [
  {title: "Tower Burger", price:"$10", img: "https://www.shutterstock.com/image-photo/ukraine-kiev-august-24-2021-600nw-2032616423.jpg" },
  {title: "Chicken with Fries", price:"$22", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWKHFzNCaWXlb8Rq5F74K18w7b1SbIM0ZyQ&s" },
  {title: "Burger Platter", price:"$14", img: "https://img.freepik.com/premium-photo/concept-fast-food-yellow-background_185193-47582.jpg" },
  {title: "Combo Deal", price:"$20", img: "https://st3.depositphotos.com/5954192/17092/i/450/depositphotos_170920008-stock-photo-top-view-hamburger-french-fries.jpg" },
  {title: "Single Deal", price:"$30", img: "https://png.pngtree.com/thumb_back/fh260/background/20221218/pngtree-burger-with-ground-veal-patty-fries-and-beverage-in-a-bottle-on-a-vibrant-yellow-background-photo-image_43552756.jpg" },
  {title: "Family Deal", price:"$30", img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL3JtNjIxLXJlbWl4LTA3OWItYy5qcGc.jpg" },
];

const addCart=()=>{
  alert("Successfully Done");
}
const CustomCard = () => {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        {cardData.map((card, idx) => (
          <Col md={4} key={idx}> {/* 3 cards per row */}a
            <Card className="custom-card">
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.price}</Card.Text>
                <Button onClick={() => addCart()}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomCard;
