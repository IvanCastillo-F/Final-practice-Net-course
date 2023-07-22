import React from "react";
import { Table, Button } from "reactstrap";

const TablaPersona = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarPersona }) => {

    const enviarDatos = (persona) => {
        setEditar(persona)
        setMostrarModal(!mostrarModal)

    }
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>IsCompletd</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? ( 
                        <tr>
                            <td colSpan="4">Sin Registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.Id}>
                                <td>{item.Name}</td>
                                <td>{item.Description}</td>
                                <td>{item.IsCompleted}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2"
                                        onClick={() => enviarDatos(item)}
                                    >Editar</Button>
                                    <Button color="danger" size="sm"
                                        onClick={() => eliminarPersona(item.Id)}
                                    >Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaPersona;
