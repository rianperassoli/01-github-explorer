import { useState, useEffect } from 'react'
import RespositoryItem from "./RepositoryItem"

import '../styles/repositories.scss'

interface Repository {
  name: string
  description: string
  html_url: string
}

export default function RespositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

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