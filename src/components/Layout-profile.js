import styled from 'styled-components'

const LayoutProfileStyled = styled.div`
  display: flex;
  gap: 1.5rem;

  flex-direction: column;
  inline-size: 100%;
  justify-content: center;

  .user-data{
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 0;

    .avatar{
      max-inline-size: 100px;
    }

    .user-name{
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
    

  }

  .info-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .buttons{
    order: 5;
  }
  .buttons button,a {
    flex: 1;
  }

  /* .buttons button{
    order: -1;
  } */
  @media screen and (min-width: 768px){
    .user-data{
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
      .avatar{
        max-inline-size: initial;
      }
    }

    .buttons button,a {
      flex: 0;
    }
  }
`

function LayoutProfile({ children }) {
  return (
    <LayoutProfileStyled>
      {children}
    </LayoutProfileStyled>
    
  )
}

export default LayoutProfile
