import * as React from "react"
import { SVGProps } from "react"

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg height={25} width={25} {...props}>
    <g transform="translate(3.966 3.568)">
      <path
        d="m0-.001 17.435 18.213M0 18.212 17.435 0"
        style={{
          opacity: 1,
          fill: "#fff",
          stroke: "#fff",
          strokeWidth: 3.23161912,
          strokeLinecap: "round",
          strokeMiterlimit: 4,
          fillOpacity: 1,
          strokeOpacity: 1,
        }}
      />
      <title>{"Layer 1"}</title>
    </g>
  </svg>
)

export default CloseIcon
