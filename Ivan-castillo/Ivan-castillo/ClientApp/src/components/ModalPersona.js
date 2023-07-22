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

        console.log(e.target.name + " : " + e.target.value)
        setPersona(
            {
                ...persona,
                [e.target.name]: e.target.value
            }
        )
    }

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
                        <Input name="name" onChange={(e) => actualizarDato(e)} value={persona.Name} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input name="description" onChange={(e) => actualizarDato(e)} value={persona.Description} />
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