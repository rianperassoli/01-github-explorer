import { useState, useEffect } from 'react'
import RespositoryItem from "./RepositoryItem"

import '../styles/repositories.scss'

const repo = {
  name: 'unform',
  description: 'descrição unform',
  link: 'http://github.com/unform/unform'
}

export default function RespositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository =>
          <RespositoryItem key={repository.name} repository={repository} />
        )}
      </ul>
    </section>
  )
}