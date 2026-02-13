import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
/* -------------------------------------------------
   Helper: decides <CldImage> vs <Image>
-------------------------------------------------- */
export const ResponsiveImage = ({
  src,
  alt,
  className = '',
}: {
  src: string
  alt?: string
  className?: string
}) => {
  const isCloudinary = !src.startsWith('/')
  const sharedProps = {
    width: 800,
    height: 450,
    alt: alt || 'Section image',
    className: `rounded-xl ${className}`,
    style: { objectFit: 'cover', width: '100%', height: 'auto' } as const,
    priority: true,
  }

  return isCloudinary ? (
    <CldImage {...sharedProps} src={src} quality={95} />
  ) : (
    <Image {...sharedProps} src={src} />
  )
}
