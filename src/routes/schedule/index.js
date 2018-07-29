import { h, Component } from 'preact';
import style from './style';
import CustomDialog from '../../components/dialog';
import { route } from '../../../node_modules/preact-router';
import SchedulePlaceholder from './placeholder';

export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedules: null
    }

    this.fetch();
  }
  
  fetch() {
    this.props.db.collection('schedules').get().then((snapshot) => {
      const schedules = [];

      snapshot.docs.forEach((schedule) => {
        schedules.push(schedule.data());
      })

      this.setState({
        schedules: schedules
      })
    })
  }

  toggleDialog = (id, session, item) => e => {
    route('/schedule/' + id);
    this.dialog.toggle(id, session, item);
  }

	render() {
    let ScheduleList = <SchedulePlaceholder />

    if(this.state.schedules) {
      ScheduleList = this.state.schedules.map((item, index) => (
        <div class={style.schedule_section}>
          <div class={style.schedule_content}>
            <div class={style.schedule_time}>
              {item.startTime} <span>{item.ampm}</span>
            </div>
            <div class={style.schedule_events}>
              {item.sessions.map((session) => (
                <div class={style.schedule_event} onClick={this.toggleDialog(index, item, session)}>
                  <div class={style.schedule_event_details}>
                    <h1 class={style.schedule_event_title}>{session.title}</h1>
                    <div class={style.schedule_event_meta}>
                      <p class={style.schedule_event_description}>
                        {session.duration} / {session.location}
                      </p>
                      {session.topics.map((topic) => {
                        if(topic === "") {
                          return false
                        }
                        return (
                          <div class={[style.schedule_event_topic, topic].join(" ")}>
                            {topic}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    }

		return (
      <div>
        <div class={style.hero}>
          <h2 class={style.hero_title}>Schedule</h2>
          <p class={style.hero_description}>
          국내 웹 개발자들이 서로 어울릴 수 있는 장을 제공하고,
          Chrome을 비롯한 구글 웹 플랫폼 전략 및 최신 기술을 공유하는 장을 제공하고자 합니다.
          GDG Korea WebTech는 이번 밋업을 시작으로 정기적인 밋업을 개최할 예정입니다.
          </p>
        </div>
        <div class={style.schedule}>
          {ScheduleList}
        </div>
      </div>
		);
	}
}