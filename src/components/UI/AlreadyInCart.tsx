import Link from 'next/link';

export default function AlreadyInCart() {
  return (
    <Link
      href="/cart"
      className="
                h-[35px] w-[80%] flex justify-center items-center
              bg-white text-[#333] border border-light-theme-border-color hover:border-light-theme-border-active
              dark:bg-gray-700 dark:text-text-light dark:border-none
                text-sm leading-[21px]
                rounded-[8px]
                transition-transform duration-500
                hover:shadow-[0_0_13px_0_rgba(23,32,49,0.4)]
                hover:cursor-pointer
              dark:hover:bg-dark-theme-border-hover
                hover:scale-105
              "
    >
      Already in cart
    </Link>
  );
}
