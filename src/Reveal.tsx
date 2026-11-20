import type { ReactNode } from 'react'

function Reveal({ children }: { children: ReactNode; delay?: number }) {
  return <div className="reveal">{children}</div>
}

export default Reveal