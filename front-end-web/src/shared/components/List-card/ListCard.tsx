import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carro } from '../../services/type';

export const ListCard = () => {

    const [carros, setCarros] = useState<Carro[]>([]);

    useEffect(() => {
        axios.get('https://carros-springboot.herokuapp.com/api/v1/carros')
        .then(response => setCarros(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <div>
                {carros.map(carro => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={carro.urlFoto} />
                        <Card.Body>
                            <Card.Title>{carro.nome}</Card.Title>
                            <Card.Text>{carro.descricao}</Card.Text>
                            <Link to={`/carro/${carro.id}`}><Button variant="primary">Visualizar</Button></Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}