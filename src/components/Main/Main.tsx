import React from 'react';
import './Main.css';

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="mainContent">
      <section className="content">{children}</section>
    </main>
  );
}

export default Main;
