import { h, Component } from 'preact';
import style from './style';

export default class SchedulePlaceholder extends Component {
  render() {
    return (
      <div>
        <div className={style.schedule_loading}>
          <div className={style.schedule_loading_time}></div>
          <div className={style.schedule_loading_content}>
            <div className={style.schedule_loading_title}></div>
            <div className={style.shcedule_loading_description}></div>
          </div>
        </div>
        <div className={style.schedule_loading}>
          <div className={style.schedule_loading_time}></div>
          <div className={style.schedule_loading_content}>
            <div className={style.schedule_loading_title}></div>
            <div className={style.shcedule_loading_description}></div>
          </div>
        </div>
        <div className={style.schedule_loading}>
          <div className={style.schedule_loading_time}></div>
          <div className={style.schedule_loading_content}>
            <div className={style.schedule_loading_title}></div>
            <div className={style.shcedule_loading_description}></div>
          </div>
        </div>
      </div>
    )
  }
}