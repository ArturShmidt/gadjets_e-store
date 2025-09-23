import FavouritesLink from '@/components/UI/NavBar/FavouritesLink';
import ShoppingCartLink from '@/components/UI/NavBar/ShoppingCartLink';

type IconsProps = {
  onClose?: () => void;
};

export function IconsSkeleton({ onClose }: IconsProps) {
  return (
    <div
      className="flex h-16 items-center justify-between"
      // aria-hidden="true"
    >
      <FavouritesLink
        isBurger
        onClose={onClose}
      />

      <ShoppingCartLink
        fullWidth
        onClose={onClose}
      />
    </div>
  );
}
