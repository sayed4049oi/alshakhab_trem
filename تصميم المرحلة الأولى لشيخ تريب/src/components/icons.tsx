type IconProps = React.SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      {children}
    </svg>
  )
}

const line = <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>
export const ArrowLeft = (props: IconProps) => <Icon {...props}>{line}</Icon>
export const Check = (props: IconProps) => <Icon {...props}><path d="m5 12 4 4L19 6" /></Icon>
export const Clock = (props: IconProps) => <Icon {...props}><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></Icon>
export const MapPin = (props: IconProps) => <Icon {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>
export const MessageCircle = (props: IconProps) => <Icon {...props}><path d="M20 11a7 7 0 0 1-7 7H8l-4 3v-5a7 7 0 1 1 16-5Z" /></Icon>
export const GraduationCap = (props: IconProps) => <Icon {...props}><path d="m3 10 9-5 9 5-9 5-9-5Z" /><path d="M7 12v4c3 2 7 2 10 0v-4M21 10v6" /></Icon>
export const Plane = (props: IconProps) => <Icon {...props}><path d="m3 11 18-6-6 18-3-8-9-4Z" /><path d="m12 15 5-5" /></Icon>
export const Calendar = (props: IconProps) => <Icon {...props}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></Icon>
export const User = (props: IconProps) => <Icon {...props}><circle cx="12" cy="8" r="3" /><path d="M5 20a7 7 0 0 1 14 0" /></Icon>