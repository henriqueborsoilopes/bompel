import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Carro } from '../../services/type';
import { useEffect, useState } from 'react';

export const DetalheCard = () => {

    const { id } = useParams<'id'>();

    const [carro, setCarro] = useState<Carro>();

    useEffect(() => {
        axios.get(`https://carros-springboot.herokuapp.com/api/v1/carros/${id}`)
        .then(response => setCarro(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={carro?.urlFoto} />
                    <Card.Body>
                        <Card.Title>{carro?.nome}</Card.Title>
                        <Card.Text>{carro?.descricao}</Card.Text>
                        <Link to={`/carro/${carro?.id}`}><Button variant="primary">Visualizar</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}