import React from 'react'

const UserDetails = ({age, name, job}) => {
  return (
    <div>
        <ul>
            <li><h1>Nome: {name}</h1></li>
            <li><p>Idade: {age}</p></li>
            <li><p>Trabalho: {job}</p></li>
        </ul>
        {age >= 18 ? (<li>O Usuário {name} pode tirar a habilitação!</li>) : (<li>O usuário {name} é menor de idade e não pode tirar a habilitação!</li>)}
        
                       
    </div>
  )
}

export default UserDetails