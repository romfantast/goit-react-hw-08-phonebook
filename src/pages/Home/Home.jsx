import React from 'react';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.home}>
      <h2>Home page</h2>
      <hr />
      <br />
      <h3>Welcome, dear friend !</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe, in
        nobis adipisci exercitationem mollitia. Exercitationem doloribus porro
        explicabo nobis!
      </p>
      <br />
      <h3>How to use it?</h3>
      <br />
      <div className={css.card}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          molestias.
        </p>
        <p>
          Dignissimos labore maxime distinctio dicta nostrum consequuntur
          blanditiis.
        </p>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Home;
