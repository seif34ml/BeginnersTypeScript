import { ReactElement } from 'react'

type propTypes = {
  title: string
}

const Heading = ({ title }: propTypes): ReactElement => {
  return <h1>{title}</h1>
}

export default Heading
