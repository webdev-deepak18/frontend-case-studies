import Link from 'next/link'
import { WorkLink } from '../data/work'

type Props = {
  top: WorkLink[]
  bottom?: WorkLink[]
}

export default function WorkActions({ top, bottom }: Props) {
  const baseButton =
    'inline-flex items-center justify-center h-10 rounded-md border px-4 text-sm transition hover:border-neutral-400'

  const primaryLink =
    'inline-flex items-center h-10 text-sm font-medium text-neutral-900'

  return (
    <div className="flex w-full flex-col gap-4 md:w-auto md:min-w-[220px] md:items-end">
      {/* Top actions */}
      <div className="flex items-center gap-3 md:justify-end">
        {top.map(link => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className={
              link.variant === 'primary'
                ? primaryLink
                : `${baseButton} border-neutral-200 text-neutral-700`
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bottom actions */}
      {bottom && (
        <div className="flex items-center gap-3 md:justify-end">
          {bottom.map(link => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`${baseButton} border-neutral-200 text-neutral-700`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
