import useFetch from '../hooks/useFetch';

function PostFetcher() {
  // იყენებს მოთხოვნილ API მისამართს
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  if (loading) return <p>მონაცემები იტვირთება...</p>;
  if (error) return <p style={{ color: 'red' }}>შეცდომა: {error}</p>;

  return (
    <div style={{ border: '1px solid #4CAF50', padding: '15px', margin: '10px 0' }}>
      <h3>API-დან წამოღებული პოსტი (Custom Hook):</h3>
      <h4>{data?.title}</h4>
      <p>{data?.body}</p>
    </div>
  );
}

export default PostFetcher;