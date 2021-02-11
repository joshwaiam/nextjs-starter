import { ReactNode, Children, cloneElement, ReactElement } from 'react'
import styles from './Loader.module.css'

type LoaderVariant =
  | 'default'
  | 'dual-ring'
  | 'ellipsis'
  | 'facebook'
  | 'grid'
  | 'heart'
  | 'ring'
  | 'ripple'
  | 'roller'
  | 'custom'

export interface LoaderProps {
  bgColorClasses?: string
  children?: ReactNode | ReactNode[]
  fullscreen?: boolean
  variant?: LoaderVariant
}

/**
 * CSS only loading spinners courtesy of LOADING.IO
 * Use 'custom' variant to render children with a heartbeat effect
 *
 * @param {string}                    bgColorClasses      Default: 'bg-gray-800'
 * @param {ReactNode | ReactNode[]}   children            Rendered only if variant is 'custom'
 * @param {boolean}                   fullscreen          Whether the loader fills the entire screen.
 * @param {LoaderVariant}             variant             Which loading element to show.
 */
export const Loader = ({
  bgColorClasses = 'bg-gray-800',
  children,
  fullscreen,
  variant = 'default',
}: LoaderProps) => {
  let loadingEl = null

  switch (variant) {
    case 'custom':
      loadingEl = <div className={styles.custom}>{children}</div>
      break
    case 'default':
      loadingEl = (
        <div className={styles.ldsDefault}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
      break
    case 'dual-ring':
      loadingEl = <div className={styles.ldsDualRing}></div>
      break
    case 'ellipsis':
      loadingEl = (
        <div className={styles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
      break
    case 'facebook':
      loadingEl = (
        <div className={styles.ldsFacebook}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
      break
    case 'grid':
      loadingEl = (
        <div className={styles.ldsGrid}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
      break
    case 'heart':
      loadingEl = (
        <div className={styles.ldsHeart}>
          <div></div>
        </div>
      )
      break
    case 'ring':
      loadingEl = (
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
      break
    case 'ripple':
      loadingEl = (
        <div className={styles.ldsRipple}>
          <div></div>
          <div></div>
        </div>
      )
      break
    case 'roller':
      loadingEl = (
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
      break
  }

  return (
    <LoaderWrapper bgColorClasses={bgColorClasses} fullscreen={fullscreen}>
      {loadingEl}
    </LoaderWrapper>
  )
}

interface LoaderWrapperProps extends Omit<LoaderProps, 'variant'> {
  children?: ReactNode | ReactNode[]
}

const LoaderWrapper = ({
  bgColorClasses,
  children,
  fullscreen,
}: LoaderWrapperProps) => (
  <div
    className={`${
      fullscreen ? 'absolute w-screen h-screen' : 'w-auto h-auto'
    } ${bgColorClasses} top-0 left-0 flex items-center justify-center overflow-hidden`}
  >
    {children}
  </div>
)

export default Loader
