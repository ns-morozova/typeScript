import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  const mov = new Movie(1, 'Мстители', 300, 2012, 'USA', 'Avengers Assemble', 'фантастика, боевик, фэнтези, прключения', 137);

  cart.add(mov);

  expect(mov.name).toBe('Мстители');
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual(mov);
});
