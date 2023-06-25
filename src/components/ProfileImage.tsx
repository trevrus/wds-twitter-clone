import Image from 'next/image'

type ProfileImageProps = {
  src?: string
  className?: string
}
export function ProfileImage({ src, className }: ProfileImageProps) {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${
        className || ''
      }`}
    >
      {src == null ? null : (
        <Image
          src={src}
          className={className}
          alt="Profile pic"
          quality={100}
          fill
        />
      )}
    </div>
  )
}
