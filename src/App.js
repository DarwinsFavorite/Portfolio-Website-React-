import React from 'react';
import Navbar from './nav_bar.js';
import About from './about.js';
import Achievement from './Achievement.js';
import Interest from './Interest.js';
import Project from './Project.js';
import styles from './my-style.module.css';
import Footer from './footer.js';

const App = () => {
   return (
      <div className={styles.App}>
         <Navbar />
         <About />
         <Achievement />
         <Interest />
         <Project />
         <Footer />
      </div>
   );
}

export default App;


