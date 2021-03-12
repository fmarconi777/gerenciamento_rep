import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

function LocationTable(props) {

    const getLocations = props.getLocations

    useEffect(() => {
        getLocations()
    }, [getLocations])

    const renderRows = () => {
        const list = Array.isArray(props.table) ? props.table : [];
        return list.map(table => (
            <tr key={table.ID}>
                <td>{table.Nome}</td>
                <td>{table.Sigla}</td>
                <td>{<button onClick={() => props.deleteLocation(table)} >
                    <FaTrash size={15} />
                </button>}
                </td>
            </tr>
        ))
    };

    return (
        <div className="location-table" >
            <table className="Table">
                <caption>Locais</caption>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sigla</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
};

export default React.memo(LocationTable);