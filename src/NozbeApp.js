import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import TestApp from './components/TestApp'
import Calendar from './components/Calendar'
import TasksPage from './pages/tasksPage'
import PriorityPage from './pages/priorityPage'

render(
  <Router history={browserHistory}>
    <Route path='/' component={TestApp} >
      <IndexRoute component={TasksPage} />
      <Route path='/na' component={PriorityPage} />
    </Route>
    <Route path='/calendar' component={Calendar} />
    <Route path='/calendar2' component={(props) => <Calendar shows={'Test prop'} />} />
  </Router>,
  document.getElementById('app')
)
