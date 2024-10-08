import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo() {
  return (
      <ItemContainer>
          <h3>Wagner</h3>
          <p>dio/wagner</p>
          <a href='#'>Ver Repositório</a><br />
          <a href="#" className="remove">Remover</a>
          <hr />
      </ItemContainer>
  )
}

export default ItemRepo;
