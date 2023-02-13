export const ProfileIcon = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="e"
      style={{
        maskType: 'alpha'
      }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={4}
      width={16}
      height={17}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Zm-12 10c0-2.66 5.33-4 8-4s8 1.34 8 4v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1Z"
        fill="#000"
      />
    </mask>
    <g mask="url(#e)">
      <path
        fill="url(#b)"
        d="M0 .5h24v24H0z"
      />
    </g>
  </svg>
);
