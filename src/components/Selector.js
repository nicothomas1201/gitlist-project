import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  background: var(--buttonBG);
  color: var(--white);
  padding: .5rem 1rem; 


  @media (prefers-color-scheme: light){
    color: var(--black);
  }
`

function Selector({ children, onChange }) {
  return (
    <SelectorStyled onChange={onChange}>
      {children}
    </SelectorStyled>
    
  )
}

export default Selector
