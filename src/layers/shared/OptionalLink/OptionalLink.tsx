import Link from 'next/link'
import { FC, ReactNode } from 'react'

export const OptionalLink: FC<{ children: ReactNode; href?: string }> = ({
	children,
	href,
}) => {
	if (href) {
		return <Link href={href}>{children}</Link>
	}

	return children
}
