import styled from 'styled-components'
import RepoItem from './Repo-item'

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

function RepoList({ repoList, search, language}) {
  let list = repoList

  if(repoList.length !== 0){
    if(search !== ''){
      list = list.filter((item) => {
        return item.name.search(search) >= 0
      })
    } 
    
  
    if(language !== ''){
      list = list.filter( item => {
        if(item.language !== null){
          return item.language.toLowerCase() === language  
        }
      })
    } 
  } else {
    console.log('esta cargando bro')
  }


  return (
    <RepoListStyled>
     {list.length !== 0 ? list.map( item => {
        return <RepoItem key={item.id} {...item} />      
      }) : <span>No se encotro ningun repositorio</span> }
    </RepoListStyled>
    
  )
}

export default RepoList
