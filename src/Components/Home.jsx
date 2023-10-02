import React from 'react'
import TopNews from './TopNews'
import MustSee from './MustSee'
import NewsTileMain from './NewsTileMain'
import MostRead from './MostRead'
import request from '../requests'


function Home() {
    return (
        <>
            <TopNews url={`${request.fetchHeadline}`} />
            <MustSee url={`${request.fetchMustSee}`} />
            <NewsTileMain title="Full story" colValue="3" url={`${request.fetchFullStory}`} />
            <MostRead url={`${request.fetchMostRead}`} />
            <NewsTileMain title="Around the BBC" colValue="4" url={`${request.fetchAroundBBC}`} />
        </>
    )
    }

export default Home