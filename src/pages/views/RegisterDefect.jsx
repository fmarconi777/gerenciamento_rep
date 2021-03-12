import React, { useState, useCallback } from 'react';
import Axios from 'axios';
import { history } from '../../history';
import Defect from '../../components/registerdefect/Defect';
import DefectTable from '../../components/registerdefect/DefectTable';
import '../../styles/views/viewbackground.css';
import '../../styles/views/registerdefect.css'



function RegisterDefect(props) {

    const initialState = {
        Defeito: '',
        Descricao: ''
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
        const resposta = await Axios.post("http://localhost:8080/defeito/cadastrar", state, {
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
            getDefects();
            history.push('/registerdefect');
        } else {
            setTipo(true)
            setError(resposta.resposta)
        };
    };

    const getDefects = useCallback (function() {
        Axios.get("http://localhost:8080/defeito/listar", {
            headers: headers
        }).then(resposta => setTable(resposta.data.resposta));
    }, []
    );

    const deleteDefect = useCallback (function(table) {
        Axios.delete(`http://localhost:8080/defeito/deletar/${table.ID}`, {
            headers: headers  
        }).then(resposta => getDefects());
    }, []
    );

    return (
        <div className="viewbackground" >
            <div className="register-defect" >
                <Defect onChangeValue={onChangeValue}
                    Sigla={state.Defeito}
                    Nome={state.Descricao}
                    submitForm={submitForm}
                    tipo={tipo}
                    error={error}
                />

                <hr />

                <DefectTable table={table}
                getDefects={getDefects}
                deleteDefect={deleteDefect}
                />

            </div>
        </div>
    )
};

export default RegisterDefect;