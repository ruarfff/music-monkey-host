import Button from '@material-ui/core/Button/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LinkButton from '../util/LinkButton'
import './EventSummaryView.css'

interface IEventSummaryViewProps {
  event: IEvent
  deleteSelected: boolean
  deleteSuccess: boolean
  deleteFailed: boolean
  onEventDeleteSelected(): IAction
  onEventDeleteClosed(): IAction
  deleteEvent(event: IEvent): IAction
  onDeleteAcknowledged(): IAction
}

const SweetAlert = withReactContent(Swal) as any

class EventSummaryView extends React.PureComponent<IEventSummaryViewProps> {
  public render() {
    const { deleteFailed, deleteSuccess } = this.props

    return (
      <div>
        <LinkButton
          variant="raised"
          color="primary"
          to={location.pathname + '/edit'}
        >
          Edit
          <EditIcon />
        </LinkButton>
        <Button
          variant="raised"
          color="secondary"
          onClick={this.handleDeleteSelected()}
        >
          Delete
          <DeleteIcon />
        </Button>
        {deleteFailed && this.showDeleteFailed()}
        {deleteSuccess && this.showDeleteSuccess()}
      </div>
    )
  }

  private showDeleteSuccess = () => {
    SweetAlert.fire({
      title: 'Event Deleted',
      type: 'success'
    }).then(() => {
      this.props.onDeleteAcknowledged()
      this.props.onEventDeleteClosed()
    })
  }

  private showDeleteFailed = () => {
    SweetAlert.fire({
      title: "Couldn't delete Event",
      text: 'Sorry. An error occurred when trying to delete this Event.',
      type: 'error'
    }).then(() => {
      this.props.onEventDeleteClosed()
    })
  }

  private handleDeleteSelected = () => () => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'This will completely remove this event',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result: any) => {
      if (result.value) {
        this.props.deleteEvent(this.props.event)
      }
      this.props.onEventDeleteClosed()
    })
  }
}

export default EventSummaryView
