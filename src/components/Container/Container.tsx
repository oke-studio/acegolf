import * as React from 'react'

interface ContainerProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, style }, ref) => {
    return (
      <div className="relative mx-auto" ref={ref} style={style}>
        {children}
      </div>
      //"container relative mx-auto"
    )
  }
)