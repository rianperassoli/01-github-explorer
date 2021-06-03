export default function RespositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'default'}</strong>
      <p>{props.repository?.description ?? 'description default'}</p>

      <a href={props.repository?.html_url ?? ''}>Acessar repositório</a>
    </li>
  )
}