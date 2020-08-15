import React from 'react'

import './app.less'

export default function FreeElement (
  props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>,
): JSX.Element {
  return <div {...props} />
}
