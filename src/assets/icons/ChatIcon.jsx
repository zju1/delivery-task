export const ChatIcon = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="d"
      style={{
        maskType: 'alpha'
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={21}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.5h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6.828c-.53 0-1.039.21-1.413.585-1.26 1.26-3.413.367-3.412-1.414L2.01 4.5c0-1.1.89-2 1.99-2Zm13 7H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1Zm-4 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Zm-6-6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1Z"
        fill="#000"
      />
    </mask>
    <g mask="url(#d)">
      <path
        fill="url(#b)"
        d="M0 .5h24v24H0z"
      />
    </g>
  </svg>
);
