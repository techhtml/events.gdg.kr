import { h, Component } from 'preact';
import style from './style';
import schedules from "./schdules";

export default class Schedule extends Component {
	render() {
		return (
      <div>
        <div class={style.hero}>
          <h2 class={style.hero_title}>Schedule</h2>
        </div>
        <div class={style.schedule}>
          {schedules.schedule.map(item => (
            <div class={style.schedule_section}>
              <div class={style.schedule_content}>
                <div class={style.schedule_time}>
                  {item.startTime} <span>{item.ampm}</span>
                </div>
                <div class={style.schedule_events}>
                  {item.sessions.map((session) => (
                    <div class={style.schedule_event}>
                      <div class={style.schedule_event_details}>
                        <h1 class={style.schedule_event_title}>{session.title}</h1>
                        <div class={style.schedule_event_meta}>
                          <p class={style.schedule_event_description}>
                            {session.duration} / {session.location}
                          </p>
                          {session.topics.map((topic) => (
                            <div class={[style.schedule_event_topic, topic].join(" ")}>
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
		);
	}
}