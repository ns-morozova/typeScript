import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1, 'Мстители', 300, 2012, 'USA', 'Avengers Assemble', 'фантастика, боевик, фэнтези, прключения', 137));
  
  expect(cart.getCostWithoutDiscount()).toBe(3200);
  expect(cart.getCostWithDiscount(10)).toBe(2880);

  cart.del(1);
  expect(cart.items.length).toBe(2);

});
