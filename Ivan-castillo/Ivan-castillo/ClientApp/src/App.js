import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import ModalPersona from "./components/ModalPersona";
import TablaPersona from "./components/TablaPersona";

const App = () => {

    const [personas, setPersona] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null)

    const mostrarDatos = async () => { 
        const response = await fetch("api/persona/Lista"); 

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

        const response = await fetch("api/persona/Guardar", {
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

        const response = await fetch("api/persona/Editar", {
            method: 'PUT',
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

    const eliminarPersona = async (id) => {

        var respuesta = window.confirm("desea eliminar el persona?")

        if (!respuesta) {
            return;
        }


        const response = await fetch("api/persona/Eliminar/" + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            mostrarDatos();
        }
    }



    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Personas</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}
                            >Nueva Persona</Button>
                            <hr></hr>
                            <TablaPersona data={personas}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarPersona={eliminarPersona}
                            />
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
                editarPersona={editarPersona}
            />
        </Container>
    );
}

export default App;
