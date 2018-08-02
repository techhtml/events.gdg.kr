import { h, Component } from 'preact';
import style from './style';
import { route } from '../../../node_modules/preact-router';
import SchedulePlaceholder from './placeholder';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import cardStyle from './card';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';

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

   moveToRegist = () => {
    location.href = "https://naver.com"
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
              {item.sessions.map((session) => {
                let speakerInfo = '';
                if(session.speaker) {
                  speakerInfo = <span>{session.speaker} /</span>
                }
                return (
                  <div class={style.schedule_event} onClick={this.toggleDialog(index, item, session)}>
                    <div class={style.schedule_event_details}>
                      <h1 class={style.schedule_event_title}>{session.title}</h1>
                      <div class={style.schedule_event_meta}>
                        <p class={style.schedule_event_description}>
                        {speakerInfo} {session.duration} / {session.location} 
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
                )}
              )}
            </div>
          </div>
        </div>
      ))
    }

		return (
      <div>
        <div class={style.hero}>
          <h2 class={style.hero_title}>Chrome Dev Meetup</h2>
          <p class={style.hero_description}>
            Chrome Dev Meetup은 Chrome Technologies에 관심을 가지고 있는
            다양한 국내 개발자들의 네트워킹 공간으로써 매달 GDG Korea WebTech에서
            주최할 예정입니다.
          </p>
          <Button raised ripple onClick={this.moveToRegist}>Registration</Button>
        </div>
        <div class={style.schedule}>
          {ScheduleList}
        </div>
        <div class={style.hero}>
          <h2 class={style.hero_title}>Speakers</h2>
        </div>
        <div class={cardStyle.card_collection}>
          <Card class={cardStyle.card}>
            <div class={cardStyle.card_header}>
              <h2 class="mdc-typography--title">Eun Cho</h2>
              <div class="mdc-typography--caption">GDG Korea WebTech Organizer. 네이버 프론트엔드 개발자로 AMP Project의 한글화도 진행하고있습니다.</div>
            </div>
            <Card.Media class="mdc-card__media mdc-card__media--square">
              <div class={cardStyle.card_image} style={{'background-image':'url(https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/32501179_1727924980623806_6631914136248778752_n.jpg?_nc_cat=0&oh=d09860dff771d4a7258b18b5ad64933e&oe=5BCED4CE)'}}></div>
            </Card.Media>
          </Card>
          <Card class={cardStyle.card}>
            <div class={cardStyle.card_header}>
              <h2 class="mdc-typography--title">Hika Maeng</h2>
              <div class="mdc-typography--caption">GDG Korea WebTech Organizer. Bsidesoft co. 대표, 코드스피츠 운영자, 성균관대학교 겸임교수</div>
            </div>
            <Card.Media class="mdc-card__media mdc-card__media--square">
              <div class={cardStyle.card_image} style={{'background-image':'url(https://avatars3.githubusercontent.com/u/5790535?s=460&v=4)'}}></div>
            </Card.Media>
          </Card>
        </div>
        <div class={style.hero}>
          <h2 class={style.hero_title}>Place</h2>
          <p class={style.hero_description}>
            Maru 180 B1 Event Hall<br/>
            180 Yeoksam-ro, Yeoksam 1(il)-dong, Gangnam-gu, Seoul
          </p>
        </div>
        <div class={style.place}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.527026490533!2d127.03655231542659!3d37.495486235951454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca154dd9258e5%3A0xe0888095de7a04b0!2sMARU180!5e0!3m2!1sen!2skr!4v1533169472703" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
		);
	}
}