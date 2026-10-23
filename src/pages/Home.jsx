import Parent from '../components/Parent';
import Counter from '../components/Counter';
import PostFetcher from '../components/PostFetcher';

function Home() {
  return (
    <div>
      <h2>მთავარი გვერდი</h2>
      <Parent />
      <Counter />
      <PostFetcher />
    </div>
  );
}

export default Home;