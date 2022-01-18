
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
  }, [loading, page]); // just when loading finishes


  const handlePage = (index) =>  {
    setPage(index);
  }
  
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

        {
          !loading  && <div className='btn-container'>
            {
              data.map((item, index) => {
                return (
                  <button key={index} className={`page-btn ${index === page ? 'active-btn' : null}`} onClick={() => handlePage(index)}>
                    {index+1}
                  </button>
                )
              })
            }
          </div>
        }

      </section>
    </main>
  );
}

export default App;
