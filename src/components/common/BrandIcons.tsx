import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetcodeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 4.735 5.46 5.46 0 0 0 4.126 2.625c.34.02.68.005 1.018-.046l.245-.053 5.617-1.193a1.375 1.375 0 1 0-.573-2.69l-5.617 1.193c-.42.063-.847.01-1.242-.152a2.72 2.72 0 0 1-1.636-2.036 2.768 2.768 0 0 1 .135-2.355c.2-.39.5-.722.868-.962l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0zm2.535 6.945a1.375 1.375 0 0 0-1.375 1.375v4.5a1.375 1.375 0 1 0 2.75 0v-4.5a1.375 1.375 0 0 0-1.375-1.375zm-3.086 5.313a1.375 1.375 0 0 0-.972.403L8.084 16.538a1.375 1.375 0 1 0 1.944 1.944l3.876-3.877a1.375 1.375 0 0 0-.972-2.347z" />
  </svg>
);
