import React from 'react';
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

const Writing = () => {
    return (
        <div>
          <Typed strings={['I am AZIZUL HAQUE TOUSIF']} typeSpeed={40}><br/></Typed>
          <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
        </div>
    );
};

export default Writing;