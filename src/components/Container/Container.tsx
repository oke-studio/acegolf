import * as React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children }, ref) => {
    return (
      <div className="container relative mx-auto" ref={ref}>
        {children}
      </div>
    )
  }
)
