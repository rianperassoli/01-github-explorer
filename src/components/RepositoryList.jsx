import RespositoryItem from "./RepositoryItem"

import '../styles/repositories.scss'

const repo = {
  name: 'unform',
  description: 'descrição unform',
  link: 'http://github.com/unform/unform'
}

export default function RespositoryList() {
  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        <RespositoryItem repository={repo} />
        <RespositoryItem repository={repo} />
        <RespositoryItem repository={repo} />
      </ul>
    </section>
  )
}