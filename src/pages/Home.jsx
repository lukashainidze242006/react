import Parent from '../components/Parent';
import Counter from '../components/Counter';
import PostFetcher from '../components/PostFetcher';
import Optimization from '../components/Optimization';

function Home() {
  return (
    <div>
      <h2>მთავარი გვერდი</h2>
      <Parent />
      <Counter />
      <PostFetcher />
      <Optimization />
    </div>
  );
}

export default Home;