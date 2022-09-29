import React, { useRef, useState } from "react" //sirve para almacenar un valor que no va a cambiar en el tiempo
import { useNavigate } from "react-router-dom"
import Overlay from "./Overlay"
import styled from "styled-components"
import { ButtonContrast } from "./Button"
import InputText from "./Input-text"
import ReactDOM from "react-dom"


const modalRoot = document.getElementById('portal')

class ModalPortal extends React.Component{  
  constructor(props){
    super(props)
    this.el = document.createElement('div')
  }  

  componentWillUnmount(){
    modalRoot.removeChild(this.el)
  }

  componentDidMount(){ 
    modalRoot.appendChild(this.el)   
  }

  render(){
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default function Modal({ isActive, setModal }){
  if(isActive){
    return (
      <ModalPortal>
        <ModalContent setModal={setModal}/>
      </ModalPortal>
    )
  }
  return null
}


const ModalContentStyled = styled.form`
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;  
  position: fixed;
  inset-block-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  inset-inline-start: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 24rem;
  border-radius: .5rem;
  .title{
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`


function ModalContent({ setModal }){
  const form = useRef(null)
  const navigator = useNavigate()

  function handleSubmit(event){
    event.preventDefault()
    
    const formData = new FormData(form.current)
    navigator(`/${formData.get('username')}`)
    setModal(false)
    
  }

  return (
    <Overlay>
      <ModalContentStyled ref={form} autoComplete="off" onSubmit={handleSubmit} >
        <h2 className="title">Busca un usuario</h2>
        <InputText autoComplete="off" type="text" name="username" placeholder="username" />
        <ButtonContrast text="Buscar" />
      </ModalContentStyled>
    </Overlay>
  )
}
