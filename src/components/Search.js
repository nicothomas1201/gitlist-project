import styled from 'styled-components'
import { ButtonRounded } from './Button'
import Icon from './icon'

const SearchStyled = styled.div`
  position: fixed;
  color: var(--white);
  inset-inline-end: 1rem;
  inset-block-end: 1rem;
`

function Search({ setModal }) {

  function handleClick(){
    setModal(true)
  }

  return (
    <SearchStyled onClick={handleClick}>
      <ButtonRounded icon={<Icon name="search" size={24}/>}/>
    </SearchStyled>
    
  )
}

export default Search
