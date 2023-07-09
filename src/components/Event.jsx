/* eslint-disable react/prop-types */

export default function Event(props) {
  return <div className={'event' + (props.slim ? ' event_slim' : '')}>
      <button className="event__button">
          <span className={`event__icon event__icon_${props.icon}`} role="img" aria-label={props.iconLabel}></span>
          <h4 className="event__title">{props.title}</h4>
          {props.subtitle &&
              <span className="event__subtitle">{props.subtitle}</span>
          }
      </button>
  </div>;
}