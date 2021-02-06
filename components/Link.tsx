import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

interface LinkProps extends NextLinkProps {
  children: ReactElement | ReactElement[]
  className?: string
}

/**
 * Returns a next/link component that passes the href to a child,
 * allowing it to work with links in other style libraries.
 */
export const Link = ({
  children,
  className,
  href,
  passHref = true,
  ...rest
}: LinkProps): JSX.Element => (
  <NextLink href={href} passHref={passHref} {...rest}>
    {cloneElement(children as ReactElement, {
      href: href.toString(),
      className,
    })}
  </NextLink>
)

export default Link
