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
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>estaCompleta?</th>
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
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    {/* Mostrar imagen dependiendo del valor de isCompleted */}
                                    {item.isCompleted ? (
                                        <img
                                            style={{ height: '20px', width: '20px' }} // Estilos como objeto JavaScript
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_light-green_checkmark.svg/2048px-Eo_circle_light-green_checkmark.svg.png"
                                            alt="Completado"
                                        />
                                    ) : (
                                        <img
                                            style={{ height: '50px', width: '50px' }} // Estilos como objeto JavaScript
                                            src="https://icon-library.com/images/x-mark-icon/x-mark-icon-5.jpg"
                                            alt="Incompleto"
                                        />
                                    )}
                                </td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2"
                                        onClick={() => enviarDatos(item)}
                                    >Editar</Button>
                                    <Button color="danger" size="sm"
                                        onClick={() => eliminarPersona(item.id)}
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
