import { ReactNode } from 'react'
import { Transition } from '@headlessui/react'

interface ModalWrapperProps {
  children: ReactNode | ReactNode[]
  modalBackdropClasses?: string
  childWrapperClasses?: string
  isOpen: boolean
  onClose(): void
}

/**
 * Wraps components with a modal overlay effect.
 *
 * @param {ReactNode | ReactNode} children                Elements to apply modal effect to.
 * @param {string}                childWrapperClasses     Classes applied to the div wrapping children components.
 *                                                        Default: 'bg-white dark:bg-gray-700'
 * @param {boolean}               isOpen                  Whether to show the modal.
 * @param {string}                modalBackdropClasses    Classes applied to the darkened modal backdrop.
 *                                                        Default: 'bg-gray-900 opacity-80'
 * @param {onClose}               onClose                 Function to close the modal when clicked.
 */
export const ModalWrapper = ({
  children,
  childWrapperClasses = 'bg-white dark:bg-gray-700',
  isOpen,
  modalBackdropClasses = 'bg-gray-900 opacity-80',
  onClose,
}: ModalWrapperProps) => (
  <div className={`fixed ${isOpen ? 'inset-0 overflow-y-auto z-10' : ''}`}>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
      >
        <div
          className={`${modalBackdropClasses} absolute inset-0`}
          onClick={onClose}
        ></div>
        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`${childWrapperClasses} inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6`}
          role="dialog"
          aria-modal="true"
        >
          {children}
        </div>
      </Transition>
    </div>
  </div>
)

export default ModalWrapper
