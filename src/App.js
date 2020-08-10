import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import MenuCard from './component/MenuCard/MenuCard';
import Widget from './component/Widget/Widget';
function App() {
  return (
    <div className="app">
      <Header/> 
      <div className="app__page">
        <div className="app__menucard"> 
      <MenuCard title="BESTSELLER"/>
      <MenuCard title="VEG PIZZA"/>
      <MenuCard title="NON-VEG PIZZA"/>
      <MenuCard title="MEALS & COMBOS"/>
      <MenuCard title="PIZZA MANIA"/>
      <MenuCard title="SPECIALITY CHICKEN"/>
      <MenuCard title="SIDES"/>
      <MenuCard title="BEVERAGES"/>
      <MenuCard title="DESSERT"/>
      </div>
      <div className="app__widget">
      <Widget/>
      </div>
     
      </div>
    </div>
  );
}

export default App;
