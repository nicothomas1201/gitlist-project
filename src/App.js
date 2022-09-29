import RepoList from "./components/Repo-list";
import Profile from "./components/Profile";
import Filters from "./components/Filters";
import Layout from "./components/Layout";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { getUser, getRepos } from "./services/users"
import { useParams } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  let { user: userName } = useParams()
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState([])
  const [language, setLanguage] = useState('')

  if(!userName){
    userName = 'nicothomas1201'
  }

  useEffect(() => {
    getUser(userName).then(({data, isError}) => {
      if(isError) return console.log('no hemos encotrado a este crakc')
      setUser(data)
    })
    getRepos(userName).then(({data, isError}) => {
      if(isError) return console.log('no hemos encotrado a este crakc')
      setRepos(data)
    })   
  }, [userName])
  
  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters setSearch={setSearch} setLanguage={setLanguage} repoListCount={repos.length} />
      <RepoList search={search} language={language} repoList={repos} />
      <Search setModal={setModal}/>
    </Layout>
  );
}

export default App;
