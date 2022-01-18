
import React from 'react';
import { useFetch } from './hooks/useFetch';
import Follower from './components/follower.component';

function App() {
  const { loading, data } = useFetch();
  console.log(data);
  return (
    <main>
      <div className='section-title'>
        <h1>{ loading ? 'Cargando...' : 'Pagination' }</h1>
        <div className='underline'></div>
      </div>

      <section className='followers'>
        <div className='container'>
          {
            data.map((follower) => {
              return <Follower key={follower.id} {...follower} />
            })
          }
        </div>
      </section>
    </main>
  );
}

export default App;
