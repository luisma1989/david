import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Sentence from './components/Sentence'
import Social from './components/Social'
import LinksGalery from './components/LinksGalery'
import SecondSentence from './components/SecondSentence'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/core.css'

// Data
import headerData from './data/header.json'
import aboutData from './data/about.json'
import sentenceData from './data/sentence.json'
import secondSentenceData from './data/secondSentence.json'
import experienceData from './data/experience.json'
import linksGaleryData from './data/linksGalery.json'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <div>
                  <Header headerData={headerData} />
                  <Experience experienceData={experienceData} />
                  <About aboutData={aboutData} />
                  <Sentence sentenceData={sentenceData} />
                  <Social />
                  <SecondSentence secondSentenceData={secondSentenceData} />
                  <LinksGalery linksGaleryData={linksGaleryData} />
                </div>
              )}}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
