import React, { useState, useCallback } from 'react';
import Axios from 'axios';
import { history } from '../../history';
import Employee from '../../components/registeremployee/Employee';
import EmployeeTable from '../../components/registeremployee/EmployeeTable';
import '../../styles/views/viewbackground.css';
import '../../styles/views/registeremployee.css'



function RegisterEmployee(props) {

    const initialState = {
        Area: '',
        Status: '',
        Matricula: '',
        Nome: '',
        Login: '',
        Senha: '',
    };
    const [state, setState] = useState(initialState);
    const [table, setTable] = useState([])


    const isLogged = localStorage.getItem('token')
    const [tipo, setTipo] = useState(null);
    const [error, setError] = useState("");
    const headers = { 'Authorization': isLogged };

    const onChangeValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const cadastrar = async () => {
        const resposta = await Axios.post("http://localhost:8080/funcionario/cadastrar", state, {
            headers: headers
        });
        return resposta.data;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const resposta = await cadastrar();
        if (resposta.tipo === "sucesso") {
            setTipo(false);
            setState({ ...initialState });
            getEmployees();
            history.push('/registeremployee');
        } else {
            setTipo(true)
            setError(resposta.resposta)
        };
    };

    const getEmployees = useCallback (function() {
        Axios.get("http://localhost:8080/funcionario/listar", {
            headers: headers
        }).then(resposta => setTable(resposta.data.resposta));
    }, []
    );

    const deleteEmployee = useCallback (function(table) {
        Axios.delete(`http://localhost:8080/funcionario/deletar/${table.ID}`, {
            headers: headers  
        }).then(resposta => getEmployees());
    }, []
    );

    return (
        <div className="viewbackground" >
            <div className="register-employee" >
                <Employee onChangeValue={onChangeValue}
                    Area={state.Area}
                    Status={state.Status}
                    Matricula={state.Matricula}
                    Nome={state.Nome}
                    Login={state.Login}
                    Senha={state.Senha}
                    submitForm={submitForm}
                    tipo={tipo}
                    error={error}
                />

                <hr />

                <EmployeeTable table={table}
                getEmployees={getEmployees}
                deleteEmployee={deleteEmployee}
                />

            </div>
        </div>
    )
};

export default RegisterEmployee;