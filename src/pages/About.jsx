import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function About() {
  const user = useContext(UserContext);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h2>ჩვენ შესახებ</h2>
      <p>ეს არის React-ის დავალების პროექტი.</p>
      <p>ავტორი: <strong>{user.name}</strong> ({user.role})</p>
    </div>
  );
}

export default About;