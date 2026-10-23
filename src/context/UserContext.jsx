import { createContext, useState } from 'react';

// 1. ვქმნით კონტექსტს
export const UserContext = createContext();

// 2. ვქმნით პროვაიდერ კომპონენტს
export function UserProvider({ children }) {
  // ინახავს ავტორის/სტუდენტის მონაცემებს ქართულად
  const [user] = useState({
    name: 'ლუკა შაინიძე',
    role: 'სტუდენტი',
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}