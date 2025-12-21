type Props = {
  title: string
}

export const Button = ({ title, onClick }: Props) => {
  return <button onClick={onclick}>{title}</button>
}
