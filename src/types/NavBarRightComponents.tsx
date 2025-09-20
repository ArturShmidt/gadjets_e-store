import FavouritesLink from '@/components/UI/NavBar/FavouritesLink';
import ShoppingCartLink from '@/components/UI/NavBar/ShoppingCartLink';
import ThemeSwitcher from '@/components/UI/ThemeSwitcher';
import React from 'react';
import { CategoryName } from './CategoryName';

export const NavBarRightComponents = [
  { id: 'theme', element: <ThemeSwitcher /> },
  { id: CategoryName.Favourites, element: <FavouritesLink /> },
  { id: CategoryName.Cart, element: <ShoppingCartLink /> },
];
