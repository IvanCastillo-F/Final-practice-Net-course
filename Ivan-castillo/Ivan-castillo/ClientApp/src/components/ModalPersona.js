import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap"

const modeloPersona = {
    id: 0,
    name: "",
    description: "",
    isCompleted: false
}


const ModalPersona = ({ mostrarModal, setMostrarModal, guardarPersona, editar, setEditar, editarPersona }) => {

    const [persona, setPersona] = useState(modeloPersona);

    const actualizarDato = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setPersona({
            ...persona,
            [name]: newValue,
        });
    };

    const enviarDatos = () => {

        if (persona.id == 0) {
            guardarPersona(persona)
        } else {
            editarPersona(persona)
        }

        setPersona(modeloPersona)

    }

    useEffect(() => {
        if (editar != null) {
            setPersona(editar)
        } else {
            setPersona(modeloPersona)
        }
    }, [editar])

    const cerrarModal = () => {

        setMostrarModal(!mostrarModal)
        setEditar(null)
    }


    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>

                {persona.id == 0 ? "Nueva Persona" : "Editar Persona"}

            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input name="name" onChange={(e) => actualizarDato(e)} value={persona.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input name="description" onChange={(e) => actualizarDato(e)} value={persona.description} />
                    </FormGroup>
                    <FormGroup check>
                        {/* Cambiar el tipo de input a "checkbox" */}
                        <Label check>
                            <Input
                                type="checkbox"
                                name="isCompleted"
                                onChange={actualizarDato}
                                checked={persona.isCompleted}
                            />
                            Is Completed
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal} >Cerrar</Button>
            </ModalFooter>
        </Modal>

    )
}

export default ModalPersona;