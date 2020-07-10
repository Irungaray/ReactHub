import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({ children }) => (
    <div className="categories">
        <h2 className="categories__title">Añadidas recientemente</h2>
    {children}
    </div>
);

export default Categories;