import Button from '@material-ui/core/Button/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import IEvent from '../event/IEvent'
import IAction from '../IAction'

interface IEditEventProps extends RouteComponentProps<any> {
  event: IEvent
  deleteSelected: boolean
  deleteSuccess: boolean
  deleteFailed: boolean
  getEventById(eventId: string): IAction
  onEventDeleteSelected(): IAction
  onEventDeleteClosed(): IAction
  deleteEvent(event: IEvent): IAction
  onDeleteAcknowledged(): IAction
}

const SweetAlert = withReactContent(Swal) as any

export default class EditEvent extends React.PureComponent<IEditEventProps> {
  public render() {
    const { deleteFailed, deleteSuccess } = this.props
    return (
      <div>
        Edit Event
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

  public componentDidMount() {
    this.props.getEventById(this.props.match.params.eventId)
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
