import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

function EmployeeTable(props) {

    const getEmployees = props.getEmployees

    useEffect(() => {
        getEmployees()
    }, [getEmployees])

    const renderRows = () => {
        const list = Array.isArray(props.table) ? props.table : [];
        return list.map(table => (
            <tr key={table.ID}>
                <td>{table.Nome}</td>
                <td>{table.Login}</td>
                <td>{table.Matricula}</td>
                <td>{table.Area}</td>
                <td>{table.Status}</td>
                <td>{<button onClick={() => props.deleteEmployee(table)} >
                    <FaTrash size={15} />
                </button>}
                </td>
            </tr>
        ))
    };

    return (
        <div className="employee-table" >
            <table className="Table">
                <caption>Funcionários</caption>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Login</th>
                        <th>Matrícula</th>
                        <th>Área</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
};

export default React.memo(EmployeeTable);