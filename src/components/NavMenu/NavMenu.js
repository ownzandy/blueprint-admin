import React from 'react'
import classes from './NavMenu.scss'
import EventNavElement from 'components/EventNavElement'
import { IndexLink } from 'react-router'
import { DisplayType } from 'routes/Role/modules/roleNavigation'

class NavMenu extends React.Component {

  static propTypes = {
    events: React.PropTypes.array.isRequired,
    fetchEvents: React.PropTypes.func.isRequired,
    selectCurrEventType: React.PropTypes.func.isRequired,
    updateActiveIndex: React.PropTypes.func.isRequired,
    updateActiveStatus: React.PropTypes.func.isRequired
  }

  handleEventClick (eventType, season, year) {
    this.props.selectCurrEventType(eventType, season, year)
    this.props.updateActiveIndex(-1, DisplayType.DETAIL)
    this.props.updateActiveStatus(false, DisplayType.DETAIL)
    this.props.updateActiveIndex(-1, DisplayType.TYPEFORM)
    this.props.updateActiveStatus(true, DisplayType.TYPEFORM)
  }

  render () {
    return (
      <div className={classes.navMenu}>
        <IndexLink className={classes.linkElement} to={'/'}> Home </IndexLink>
        <EventNavElement title={'Events'} elements={this.props.events}
          click={this.handleEventClick.bind(this)} />
      </div>
    )
  }
}

export default NavMenu
