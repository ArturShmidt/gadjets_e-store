export const VALID_CATEGORIES = [
  'phones',
  'tablets',
  'accessories',
  'shoppingcart',
  'favorites',
];

export const getValidCategories = async () => {
  // В реальному проєкті ви б робили запит до бази даних чи CMS
  // const response = await fetch('https://.../api/categories');
  // const data = await response.json();
  // return data.map(category => category.slug);
  return VALID_CATEGORIES;
};
