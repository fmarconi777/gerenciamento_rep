import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

function DefectTable(props) {

    const getDefects = props.getDefects

    useEffect(() => {
        getDefects()
    }, [getDefects])

    const renderRows = () => {
        const list = Array.isArray(props.table) ? props.table : [];
        return list.map(table => (
            <tr key={table.ID}>
                <td>{table.Defeito}</td>
                <td>{table.Descricao}</td>
                <td>{<button onClick={() => props.deleteDefect(table)} >
                    <FaTrash size={15} />
                </button>}
                </td>
            </tr>
        ))
    };

    return (
        <div className="defect-table" >
            <table className="Table">
                <caption>Locais</caption>
                <thead>
                    <tr>
                        <th>Defeito</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
};

export default React.memo(DefectTable);