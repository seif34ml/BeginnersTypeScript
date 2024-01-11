import * as react from 'react'

type propType = {
  title?: string
  children: react.ReactNode
}
const Sections = ({
  title = 'deafult title',
  children = '',
}: propType): any => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default Sections
