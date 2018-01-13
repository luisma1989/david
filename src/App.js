import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import IntlWrapper from './Intl/IntlWrapper'

import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Sentence from './components/Sentence'
import Social from './components/Social'
import LinksGalery from './components/LinksGalery'

import SecondSentence from './components/SecondSentence'
import Galery from './components/Galery'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/core.css'

class App extends Component {
  render () {
    return (
      <IntlWrapper>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" render={() => {
                return (
                  <div>
                    <Header 
                      headerData={this.props.intl.messages.header} 
                      intl={this.props.intl} />
                    <Experience experienceData={this.props.intl.messages.experience} />
                    <About aboutData={this.props.intl.messages.about} />
                    <Sentence sentenceData={this.props.intl.messages.sentence} />
                    <Social />
                    <SecondSentence secondSentenceData={this.props.intl.messages.secondSentence} />
                    <LinksGalery linksGaleryData={this.props.intl.messages.linksGalery} />
                  </div>
                )}}
              />
              <Route path='/events' render={() => {
                return (<Galery />)
              }}
              />
              <Route path='/plates' render={() => {
                return (<About />)
              }}
              />
            </Switch>
          </Router>
        </div>
      </IntlWrapper>
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
