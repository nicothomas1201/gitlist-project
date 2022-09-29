import styled from "styled-components";

const LayoutStyled = styled.main`
  min-block-size: 100vh;
  max-inline-size: 75rem;
  margin: auto;
  padding-inline-start: 1.25rem;
  padding-inline-end: 1.25rem;
  padding-block-start: 2rem;
  padding-block-end: 2rem;
  @media screen and (min-width: 768px){
    padding-block-start: 2.5rem;
    padding-block-end: 2.5rem;
    display: grid;
    grid-template-columns: 278px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
    grid-template-areas: "profile filters" "profile repo-list";
  }

`

function Layout({children}){
  return(
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout