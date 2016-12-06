import { connect } from 'react-redux'
import { fetchEvents, selectCurrEventType } from '../modules/events'
import { updateActiveStatus, updateActiveIndex } from 'routes/Role/modules/roleNavigation'
import NavMenu from 'components/NavMenu'

const mapDispatchToProps = {
  fetchEvents,
  selectCurrEventType,
  updateActiveStatus,
  updateActiveIndex
}

const mapStateToProps = (state) => ({
  events: state.events.events
})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
