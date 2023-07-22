import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap"

const modeloPersona = {
    Id: 0,
    Name: "",
    Description: "",
    IsCompleted: ""
}


const ModalPersona = ({ mostrarModal, setMostrarModal, guardarPersona, editar, setEditar, editarPersona }) => {

    const [persona, setPersona] = useState(modeloPersona);

    const actualizarDato = (e) => {

        console.log(e.target.Name + " : " + e.target.value)
        setPersona(
            {
                ...persona,
                [e.target.Name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (persona.Id == 0) {
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

                {persona.Id == 0 ? "Nueva Persona" : "Editar Persona"}

            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="Name" onChange={(e) => actualizarDato(e)} value={persona.Name} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="Description" onChange={(e) => actualizarDato(e)} value={persona.Description} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="IsCompleted" onChange={(e) => actualizarDato(e)} value={persona.IsCompleted} />
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