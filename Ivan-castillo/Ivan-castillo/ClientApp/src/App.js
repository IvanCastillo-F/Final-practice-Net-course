import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import ModalPersona from "./components/ModalPersona";
import TablaPersona from "./components/TablaPersona";

const App = () => {

    const [personas, setPersona] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);

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
}, [])

    const guardarPersona = async (persona) => {

        const response = await fetch("api/personaitem/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(persona)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarDatos();
        }
    }

    const editarPersona = async (persona) => {

        const response = await fetch("api/personaitem/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(persona)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarContactos();
        }
    }



    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de contacto</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}
                            >Nuevo Contacto</Button>
                            <hr></hr>
                            <TablaPersona data={personas}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalPersona
                mostrarModal={mostrarModal}

                setMostrarModal={setMostrarModal}
                guardarPersona={guardarPersona}

                editar={editar}
                setEditar={setEditar}
                editarContacto={editarPersona}
            />
        </Container>
    );
}

export default App;
