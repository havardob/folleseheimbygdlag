import type { EventType } from "./_types/types.ts";
import { useState } from "react";
import {formatDate} from "../data/_helpers.ts";

interface EventList {
  events: EventType[] | any[];
  hideToggle?: boolean;
  limit?: number;
}

export const EventList = ({
  events,
  hideToggle = false,
  limit = Infinity,
}: EventList) => {
  const today = new Date();
  const isoToday = today.toISOString().slice(0, 10);

  const [toggle, setToggle] = useState<"future" | "past">("future");

  const filteredEvents = events
    .filter((item) => {
      if (toggle === "future") {
        return item.sortableDate >= isoToday;
      } else {
        return item.sortableDate < isoToday;
      }
    })
    .sort((a, b) => {
      if (toggle === "future") {
        return a.sortableDate.localeCompare(b.sortableDate);
      } else {
        return b.sortableDate.localeCompare(a.sortableDate);
      }
    })
    .slice(0, limit);

  return (
    <div className="event-list">
      {!hideToggle && (
        <div className="event-list__tabs">
          <button
            className={`event-list__tab ${toggle === "future" && "active"}`}
            onClick={() => setToggle("future")}
          >
            Kommende
          </button>
          <button
            className={`event-list__tab ${toggle === "past" && "active"}`}
            onClick={() => setToggle("past")}
          >
            Avholdte
          </button>
        </div>
      )}
      <div className="event-list__list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((item, index) => {
            return (
              <div
                className="event-card"
                key={`${item.eventDate + item.title + index.toString()}`}
              >
                <div className="event-card__inner">
                  <div className="event-card__meta">
                    <time
                      dateTime={item.eventDate}
                      className="event-card__date"
                    >
                      {formatDate(item.eventDate)}
                    </time>
                    {item.eventTime && (
                      <span className="event-card__time">{item.eventTime}</span>
                    )}
                    {item.eventLocation && (
                      <span className="event-card__location">
                        {item.eventLocation}
                      </span>
                    )}
                  </div>
                  <div className="event-card__content">
                    <h2 className="event-card__title">
                      <a href={item.fullSlug}>{item.title}</a>
                    </h2>
                    {item.leading && (
                      <p className="event-card__text">{item.leading}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="event-list__empty-state">Ingen arrangementer</div>
        )}
      </div>
    </div>
  );
};
