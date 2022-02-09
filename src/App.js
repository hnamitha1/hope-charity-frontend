import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Suspense, lazy } from 'react';
import "./styles/index.css"
import Main from './layouts/Main';

const Donate = lazy(() => import('./pages/Donate'));
const OurApp = lazy(() => import('./pages/OurApp'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const OurStory = lazy(() => import('./pages/OurStory'));
const Shop = lazy(() => import('./pages/Shop'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const YoungOld = lazy(() => import('./pages/YoungOld'));
  
function App() {
	return(
		<Router>
            <Suspense fallback={<Main />}>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/our-app" component={OurApp} />
                    <Route path="/our-story" component={OurStory} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/what-we-do" component={WhatWeDo} />
                    <Route path="/young-minds-old-problem" component={YoungOld} />
                    <Route component={NotFound} status={404} /> 
                </Switch>
            </Suspense> 
        </Router>
    );
}

export default App;