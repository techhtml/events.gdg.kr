import { h, Component } from 'preact';
import Radio from 'preact-material-components/Radio';
import FormField from 'preact-material-components/FormField';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/Radio/style.css';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/TextField/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import style from './style.css';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      start_time: '',
      end_time: '',
      ampm: 'am',
      session_title: '',
      session_description: '',
      session_location: ''
    }
    this.addData.bind(this);
    this.changeText.bind(this);
  }
  addData(e) {
    e.preventDefault();
  }
  changeText(e) {
    console.log(this);
    this.setState({
      start_time : e.target.value
    })
  }
	render() {
		return (
			<div className={style.form}>
        <h2 className={style.form_title}>Add Schedule</h2>
        <p className={style.form_description}>이벤트의 스케줄을 추가합니다.</p>
        <form onSubmit={this.addData}>
          <div>
            <TextField type="text" label="start Time" oninput={this.changeText} value={this.state.start_time} />
          </div>
          <div>
            <TextField type="text" label="end Time" />
          </div>
          <div>
          <FormField>
            <Radio id="r1" name='ampm'></Radio>
            <label for="r1">am</label>
          </FormField>
          <FormField>
            <Radio id="r2" name='ampm'></Radio>
            <label for="r2">pm</label>
          </FormField>
          </div>
          <div>
            <div>
              <TextField type="text" label="title" name="session_time" />
            </div>
            <div>
              <TextField type="text" label="description" name="session_description" />
            </div>
            <div>
              <TextField type="text" label="location" name="session_location" />
            </div>
          </div>
          <Button raised ripple>Submit</Button>
        </form>
      </div>
		);
	}
}
