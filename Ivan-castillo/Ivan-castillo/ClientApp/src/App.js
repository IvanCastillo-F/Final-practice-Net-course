import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import TablaPersona from "./components/TablaPersona";

const App = () => {

    const [personas, setPersona] = useState([])

    const mostrarDatos = async () => { 
        const response = await fetch("api/personaitem/Lista"); 

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setPersona(data);
        } else {
            console.log("error en la lista");
        }
    }


useEffect(() => {
    mostrarDatos()
},[])

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de contacto</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">Nuevo Contacto</Button>
                            <hr></hr>
                            <TablaPersona data={personas} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
