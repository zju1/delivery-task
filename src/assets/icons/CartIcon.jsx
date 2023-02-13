export const CartIcon = (props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="c"
      style={{
        maskType: 'alpha'
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={2}
      width={23}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.667 9.506a8.961 8.961 0 0 1-7.452-3.982l-1.728-2.588a1 1 0 0 0-1.66 0l-1.74 2.604a8.924 8.924 0 0 1-7.42 3.966c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.468-9.008c.048-.174.082-.352.102-.532 0-.55-.45-1-1-1Zm-10.01-4.21 2.81 4.21h-5.62l2.81-4.21Zm-1.99 10.21c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z"
        fill="#000"
      />
    </mask>
    <g mask="url(#c)">
      <path
        fill="url(#b)"
        d="M.667 0h24v24h-24z"
      />
    </g>
  </svg>
);
