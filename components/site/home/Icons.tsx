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

export function CoursesIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="InsertPageBreakIcon"
    >
      <path d="M4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-3H4v3zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2v7H20V8zm-7 1V3.5L18.5 9H13zm-4 4h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"></path>
    </svg>
  );
}

export function CustomeSectionIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="DashboardCustomizeOutlinedIcon"
    >
      <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
    </svg>
  );
}

export function ActivitiesIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="LocalActivityIcon"
    >
      <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path>
    </svg>
  );
}

export function InternshipIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="BusinessCenterIcon"
    >
      <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path>
    </svg>
  );
}

export function LanguageIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="TranslateIcon"
    >
      <path d="m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"></path>
    </svg>
  );
}

export function HobbyIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="SportsHandballIcon"
    >
      <path d="M14.27 6c-.55.95-.22 2.18.73 2.73.95.55 2.18.22 2.73-.73.55-.95.22-2.18-.73-2.73-.95-.55-2.18-.22-2.73.73z"></path>
      <path d="M15.84 10.41s-1.63-.94-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89c1.14 1.55 1.33 3.69.31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08z"></path>
      <path d="M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.64.55 2.05z"></path>
    </svg>
  );
}

export function ReferenceIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="PeopleAltIcon"
    >
      <path
        fillRule="evenodd"
        d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
      ></path>
      <circle cx="9" cy="8" r="4" fillRule="evenodd"></circle>
      <path
        fillRule="evenodd"
        d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
      ></path>
    </svg>
  );
}
