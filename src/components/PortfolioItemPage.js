import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <p>You are editing Portfolio item: {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;