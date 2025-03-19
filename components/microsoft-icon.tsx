import type { SVGProps } from "react"

export function MicrosoftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="16" height="16" fill="currentColor" {...props}>
      <path d="M11 11H0V0h11v11z" />
      <path d="M23 11H12V0h11v11z" />
      <path d="M11 23H0V12h11v11z" />
      <path d="M23 23H12V12h11v11z" />
    </svg>
  )
}

