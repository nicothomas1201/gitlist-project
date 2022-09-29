import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: var(--buttonBG);
  color: var(--white);
  border: 1px solid var(--grey);
  border-radius: .5rem;
  padding-block: .25rem;
  min-inline-size: 135px; 
  justify-content: center;
  gap: .5rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font: var(--button); 
  transition: .3s background linear ;
  text-decoration: none !important; 
  /* color: var(--black); */
  &:hover{
    background: var(--white);
    color: var(--button);
  }

  @media (prefers-color-scheme: light){
    color: var(--black);
  }
`

function Button({ text, link, className, icon }) {
  const component = link ? 'a' : 'button' 
  let IconComponent = null

  if(icon){
    if(isValidElement(icon)){
      IconComponent = icon
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  )
}

export const ButtonContrast = styled(Button)`
  background: var(--white);
  color: var(--buttonBG);
  &:hover{
    background: var(--buttoBG);
    color: var(--white);
  }
`

export const ButtonRounded = styled(Button)`
  border: 1.5px solid var(--grey-2);
  min-inline-size: initial;
  border-radius: 50%;
  padding: .75rem;
  
  &:hover{
    background: var(--buttonBG);
    transform: scale(1.01);
  }
`

export default Button

