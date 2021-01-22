import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { cloneElement } from 'react'

interface LinkProps extends NextLinkProps {
  child: JSX.Element
}

/**
 * Returns a next/link component that passes the href to a child,
 * allowing it to work with the Material-UI Link component
 */
export const Link = ({
  child,
  href,
  passHref = true,
  ...rest
}: LinkProps): JSX.Element => (
  <NextLink href={href} passHref={passHref} {...rest}>
    {cloneElement(child, { href: href.toString() })}
  </NextLink>
)

export default Link
