import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Alunos from './pages/Alunos';
import NovoAluno from './pages/NovoAluno';

export default function RoutesConfig(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/alunos' element={<Alunos />} />
                <Route path='/aluno/novo/:alunoId' element={<NovoAluno />} />
            </Routes>
        </BrowserRouter>
    );
}