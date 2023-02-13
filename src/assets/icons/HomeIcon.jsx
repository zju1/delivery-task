export const HomeIcon = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: 'alpha'
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={20}
      height={17}
    >
      <path
        d="M9.998 19.828v-3a2 2 0 1 1 4 0v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5.3a1.7 1.7 0 0 1 1.7-1.7c.46 0 .68-.57.33-.87l-8.36-7.53c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87a1.7 1.7 0 0 1 1.7 1.7v5.3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1Z"
        fill="#000"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="url(#b)"
        d="M0 .5h24v24H0z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={24}
        y1={24.558}
        x2={0}
        y2={0.558}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF1843" />
        <stop
          offset={1}
          stopColor="#FF7E95"
        />
      </linearGradient>
    </defs>
  </svg>
);
