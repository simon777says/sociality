import React from 'react';

import Posts from '../7Posts/Posts';

const News = (props) => {
    return (
        <div >
            <Posts message='React' />
            <Posts message='News' />
            <Posts message='Posts' />
            <Posts message='Header' />
            <Posts message='' />
            <Posts message='recording' />
            <Posts message='message' />
        </div>
    );
}
export default News;