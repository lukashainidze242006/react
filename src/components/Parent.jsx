import Child from './Child';

function Parent() {
  const books = [
    { id: 1, name: 'ვეფხისტყაოსანი', author: 'შოთა რუსთაველი' },
    { id: 2, name: 'დათა თუთაშხია', author: 'ჭაბუა ამირეჯიბი' },
  ];

  return (
    <div>
      <h2>წიგნების სია</h2>
      <Child books={books} />
    </div>
  );
}

export default Parent;