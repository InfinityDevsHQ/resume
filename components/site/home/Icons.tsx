interface IconProps {
  className?: string;
}

export function UploadIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="#0bdbb6"
      data-testid="AssignmentIndTwoToneIcon"
    >
      <path
        d="M19 5H5v14h14V5zm-7 1c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm6 12H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18z"
        opacity=".3"
      ></path>
      <path d="M20.66 3.88c-.14-.21-.33-.4-.54-.54-.11-.07-.22-.13-.34-.18-.24-.1-.5-.16-.78-.16h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c.28 0 .54-.06.78-.16.12-.05.23-.11.34-.18.21-.14.4-.33.54-.54.21-.32.34-.71.34-1.12V5c0-.41-.13-.8-.34-1.12zM12 2.75c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 2.88c-2.03 0-6 1.08-6 3.58V18h12v-1.53c0-2.51-3.97-3.59-6-3.59zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z"></path>
    </svg>
  );
}

export function DeleteIcon({ className }: IconProps) {
  return (
    <div>
      <svg
        style={{ width: "24px", height: "24px" }}
        fill="black"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="DeleteOutlineIcon"
      >
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
      </svg>
    </div>
  );
}
