import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import Events from './Events'

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

const EventsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Events))

export default EventsContainer
