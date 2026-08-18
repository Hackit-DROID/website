import { forwardRef } from 'react';
import { Mail as LucideMail } from 'lucide-react';

const IconWrapper = forwardRef(({ children, size = 20, className = "", color = "currentColor", strokeWidth = 2, viewBox = "0 0 24 24", ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide ${className}`}
      {...props}
    >
      {children}
    </svg>
  );
});

IconWrapper.displayName = 'IconWrapper';

export const Github = forwardRef((props, ref) => (
  <IconWrapper ref={ref} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </IconWrapper>
));
Github.displayName = 'Github';
export const GithubIcon = Github;

export const Linkedin = forwardRef((props, ref) => (
  <IconWrapper ref={ref} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </IconWrapper>
));
Linkedin.displayName = 'Linkedin';
export const LinkedinIcon = Linkedin;

export const Discord = forwardRef((props, ref) => (
  <IconWrapper ref={ref} {...props}>
    <path d="m8 17-.55 2C5.5 18.5 3.5 17.5 2 16.27 2 11 3.5 7.5 5 5c0 0 2.5-1 4.5-1l.5 1.36a4.82 4.82 0 0 1 4 .14l.5-1.5c2 0 4.5 1 4.5 1 1.5 2.5 3 6 3 11.27A14.68 14.68 0 0 1 16.55 19L16 17" />
    <path d="M7.5 16.5c.73.5 2 1.5 4.5 1.5s3.77-1 4.5-1.5" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
  </IconWrapper>
));
Discord.displayName = 'Discord';
export const DiscordIcon = Discord;

export const Twitter = forwardRef((props, ref) => (
  <IconWrapper ref={ref} {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </IconWrapper>
));
Twitter.displayName = 'Twitter';
export const TwitterIcon = Twitter;

export const Instagram = forwardRef((props, ref) => (
  <IconWrapper ref={ref} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </IconWrapper>
));
Instagram.displayName = 'Instagram';
export const InstagramIcon = Instagram;

export const Mail = LucideMail;
export const MailIcon = LucideMail;
