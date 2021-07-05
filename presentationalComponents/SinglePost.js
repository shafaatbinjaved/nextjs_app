import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const getRandomInt = max => {
    return Math.floor(Math.random() * max) + 1;
}

const Post = ({
    data
}) => {
    return <Container>
        <Row>
            <Col sm={9}>
                <h1>{data.title}</h1>
                <Image
                    src={`http://lorempixel.com/400/200/sports/${getRandomInt(10)}`}
                    fluid
                />
                <div>{data.body}</div>
            </Col>
            <Col sm={3}>Sidebar view</Col>
        </Row>
    </Container>
};

export default Post;
