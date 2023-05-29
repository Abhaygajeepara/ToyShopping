import  { Component } from 'react';
import { useParams } from 'react-router-dom';
export default function ScreenB() {
    const { id } = useParams();
  
    return (
      <div>
        <h2>Screen B</h2>
        <p>ID: {id}</p>
      </div>
    );
  }