
import './App.css'
import { useState } from 'react'

export function ComponenteTeste() {
  const [mensagem, setMensagem] = useState('mensagem não alterada')

  return (
    <div>
      <h1>salvee familia</h1>
      <p>{mensagem}</p>
      <button style={{ background: 'red', color: 'white' }} onClick={() => setMensagem('mensagem foi alterada')}>Mensagem do botao</button>

    </div>
  )
}


