
import React, { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Follower from './components/follower.component';
import { useEffect } from 'react';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if(loading) return;
    setFollowers(data[page]);
  }, [loading]); // just when loading finishes
  
  return (
    <main>
      <div className='section-title'>
        <h1>{ loading ? 'Cargando...' : 'Pagination' }</h1>
        <div className='underline'></div>
      </div>

      <section className='followers'>
        <div className='container'>
          {
            followers.map((follower) => {
              return <Follower key={follower.id} {...follower} />
            })
          }
        </div>
      </section>
    </main>
  );
}

export default App;
