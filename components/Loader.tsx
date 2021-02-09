import { ReactNode } from 'react'
import styles from './Loader.module.css'

export interface LoaderProps {
  bgColorClasses?: string
  fullscreen?: boolean
  variant?:
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
  heartOverride?: JSX.Element
}

/**
 * CSS only loading spinners courtesy of LOADING.IO
 *
 * @param {string} bgColorClasses         Default: 'bg-gray-800'
 * @param {boolean} fullscreen            Whether the loader fills the entire screen.
 * @param variant                         Which loading element to show.
 * @param {JSX.Element} heartOverride     When the variant of 'heart' is selected, applies the effect to
 *                                        the provided JSX
 *
 */
export const Loader = ({
  bgColorClasses = 'bg-gray-800',
  fullscreen,
  heartOverride,
  variant = 'default',
}: LoaderProps) => {
  let loadingEl = null

  switch (variant) {
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
        <div className={styles.ldsHeart}>{heartOverride || <div></div>}</div>
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
