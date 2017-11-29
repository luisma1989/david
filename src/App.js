import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import IntlProvider from './Intl/IntlWrapper'

import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Sentence from './components/Sentence'
import Social from './components/Social'
import LinksGalery from './components/LinksGalery'
import SecondSentence from './components/SecondSentence'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/core.css'

import aboutData from './data/about.json'
import sentenceData from './data/sentence.json'
import secondSentenceData from './data/secondSentence.json'
import experienceData from './data/experience.json'

class App extends Component {
  render () {
    return (
      <IntlProvider>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" render={() => {
                return (
                  <div>
                    <Header headerData={this.props.intl.messages} />
                    <Experience experienceData={experienceData} />
                    <About aboutData={aboutData} />
                    <Sentence sentenceData={sentenceData} />
                    <Social />
                    <SecondSentence secondSentenceData={secondSentenceData} />
                    <LinksGalery linksGaleryData={this.props.intl.messages.linksGalery} />
                  </div>
                )}}
              />
              <Route path='/events' render={() => {
                return (<About />)
              }}
              />
              <Route path='/plates' render={() => {
                return (<About />)
              }}
              />
            </Switch>
          </Router>
        </div>
      </IntlProvider>
    )
  }
}

App.propTypes = {
  intl: PropTypes.object.isRequired
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  }
}

export default connect(mapStateToProps)(App)
