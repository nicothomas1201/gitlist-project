import styled from 'styled-components'
import  InputText from './Input-text'
import Selector from './Selector'
import Separator from './Separator'

const FiltersStyled = styled.div`
  .count{
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }
  
  .action-list{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-block-start: 2.5rem;
  }

  .select-list{
    display: flex;
    gap: .5rem;
    inline-size: 100%;
  }

  .count{
    display: none;
  }

  @media screen and (min-width: 768px){
    grid-area: filters;

    .count{
      display: block;
    }

    .action-list{
      flex-direction: row;
      margin-block-start: initial;
      inline-size: 100%;
    }
  
   
    .select-list{
      display: flex;
      gap: .5rem;
      justify-content: initial;
      inline-size: initial;
    }
  }
`

function Filters({ repoListCount = 100, setSearch, setLanguage }) {

  function handleChange(event){
    setSearch(event.target.value)
  }

  function handleChangeFilterLanguage(event){
    if(event.target.value === 'all'){
      return setLanguage('')
    }
    setLanguage(event.target.value)
  }

  return (
    <FiltersStyled>
      <h2 className='count'>
        Repositorios {repoListCount}
      </h2>
      <div className='action-list'>
        <InputText 
          placeholder="Busca un repositorio"
          type="search"
          onChange={handleChange}
        />
        <div className='select-list'>
          <Selector>
            <option value="all">all</option>
            <option value="fork">fork</option>
          </Selector>
          <Selector onChange={handleChangeFilterLanguage}>
            <option value="lenguaje"  defaultChecked disabled>lenguaje</option>
            <option value="html" >html</option>
            <option value="css" >css</option>
            <option value="javascript">javascript</option>
            <option value="all">todos</option>
          </Selector>
          <Selector>
            <option value="ordernar" disabled>ordernar</option>
            <option value="estrellas">estrellas</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  )
}

export default Filters
