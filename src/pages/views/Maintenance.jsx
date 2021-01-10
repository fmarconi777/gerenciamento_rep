import React from 'react';
import '../../styles/views/maintenance.css'

function Maintenance(props) {
    return (
        <div className="maintenance" >
            <table className="Table">
                <caption>Relógios em manutenção</caption>
                <tr>
                    <th>Patrimônio</th>
                    <th>Local</th>
                    <th>Terminal</th>
                    <th>IP</th>
                </tr>
                <tr>
                    <td>20824550</td>
                    <td>Estação Minas Shopping</td>
                    <td>UMS</td>
                    <td>172.19.190.19</td>
                </tr>
                <tr>
                    <td>20824551</td>
                    <td>Estação São Gabriel</td>
                    <td>USG</td>
                    <td>172.19.190.20</td>
                </tr>
                <tr>
                    <td>20824551</td>
                    <td>Sede</td>
                    <td>SEDE (TERREO)</td>
                    <td>172.19.190.20</td>
                </tr>
            </table>
        </div>
    )
};

export default Maintenance;