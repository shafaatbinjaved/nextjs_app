import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const getRandomInt = max => {
    return Math.floor(Math.random() * max) + 1;
}

const Posts = ({
    data
}) => {
    return <CardColumns>
        {data.map((post, index) => <Card
            key={index}
            className="m-4"
            style={{ width: '18rem' }}
        >
            <Card.Img
                variant="top"
                src={`http://lorempixel.com/400/200/sports/${getRandomInt(10)}`}
            />
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Body>{post.body}</Card.Body>
                <Button
                    variant="primary"
                    href={`/cards/${post.id}`}
                >
                    More info
                </Button>
            </Card.Body>
        </Card>)}
    </CardColumns>;
};

export default Posts;
