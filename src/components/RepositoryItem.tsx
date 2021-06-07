interface RespositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export default function RespositoryItem(props: RespositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'default'}</strong>
      <p>{props.repository?.description ?? 'description default'}</p>

      <a href={props.repository?.html_url ?? ''}>Acessar repositório</a>
    </li>
  )
}