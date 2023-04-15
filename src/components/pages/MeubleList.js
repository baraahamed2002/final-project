import React from 'react'
import { meubleslist } from '../../Meubles'
export default function MeubleList() {
  return (
    <div>{meubleslist.map(el=><h1>{el.name}</h1>)}</div>
  )
}
