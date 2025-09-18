import FavoritesLink from '@/components/UI/NavBar/FavoritesLink';
import ShoppingCartLink from '@/components/UI/NavBar/ShoppingCartLink';
import ThemeSwitcher from '@/components/UI/ThemeSwitcher';
import React from 'react';

export const NavBarRightComponents = [
  { id: 'theme', element: <ThemeSwitcher /> },
  { id: 'favourites', element: <FavoritesLink /> },
  { id: 'cart', element: <ShoppingCartLink /> },
];
