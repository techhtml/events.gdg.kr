import { h, Component } from 'preact';
import Dialog from 'preact-material-components/Dialog';
import 'preact-material-components/Dialog/style.css';

export default class CustomDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      detail: null
    }
  }

  toggle(index, session, detail) {

    this.setState({
      session: session,
      detail: detail
    })

    this.scrollingDlg.MDComponent.show
  }
  
  render() {
    console.log(this.props.schedule)
    return (
      <div>
        <Dialog ref={scrollingDlg => { this.scrollingDlg = scrollingDlg; }}>
          <Dialog.Header></Dialog.Header>
          <Dialog.Body></Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
            <Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}