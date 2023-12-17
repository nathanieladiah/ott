import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";

// import SchoolIcon from "../assets/svg/deleteIcon.svg?react";
import CelebrateIcon from "../../assets/images/timeline/celebrate.svg?react";
import HeartIcon from "../../assets/images/timeline/heart.svg?react";
import IceCreamIcon from "../../assets/images/timeline/ice-cream.svg?react";
import OneIcon from "../../assets/images/timeline/one.svg?react";
import SchoolIcon from "../../assets/images/timeline/schoolBag.svg?react";

const Timeline = () => {
  return (
    <section className="timeline">
      <h1 className="timeline__heading">The story of us</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--meeting"
          contentStyle={{ background: "#fdb4cf", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fdb4cf" }}
          date="June 2022"
          // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "transparent", color: "#000" }}
          //   icon={<WorkIcon />}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Encounter</h3>
          <h4 className="vertical-timeline-element-subtitle">UTT, ECIAF</h4>
          <p>
            It was after a Math class. Ashaki approached Nathaniel and asked if
            he went to Presentation College. She said it was because he looked
            like a Pres Boy.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--ice-cream"
          contentStyle={{ background: "#fdb4cf", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fdb4cf" }}
          date="07 August 2022"
          // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "transparent", color: "#000" }}
          //   icon={<WorkIcon />}
          icon={<IceCreamIcon />}
        >
          <h3 className="vertical-timeline-element-title">Ice Cream Date</h3>
          <h4 className="vertical-timeline-element-subtitle">
            DQ, Price Plaza
          </h4>
          <p>
            Ashaki and Nathaniel went for ice cream at DQ. Ashaki didn&apos;t
            want Nathaniel to get a basic bitch flavour. After ice-cream, the
            conversation was so nice that they decided to extend the date and
            get some HAKKA.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--meeting"
          contentStyle={{ background: "#fdb4cf", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fdb4cf" }}
          date="09 August 2022"
          // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "transparent", color: "#000" }}
          //   icon={<WorkIcon />}
          icon={<HeartIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Confession</h3>
          <h4 className="vertical-timeline-element-subtitle">WhatsApp</h4>
          <p>
            After a couple months of talking and getting to know each other, the
            confession happened. It was more of a question than a confession.
            Ashaki was blunt, &quot;Do you like me?&quot;. Nathaniel was
            nervous, heart hammering away and creating puddles of sweat,
            &quot;Yes.&quot; That&apos;s the start
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--meeting"
          contentStyle={{ background: "#fdb4cf", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fdb4cf" }}
          date="28 October 2022"
          // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "transparent", color: "#000" }}
          //   icon={<WorkIcon />}
          icon={<CelebrateIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            It&apos;s Official
          </h3>
          <h4 className="vertical-timeline-element-subtitle">TGI Fridays</h4>
          <p>
            This was Nathaniel&apos;s first relationship so he thought that they
            were already boyfriend and girlfriend. Ashaki enlightened him that
            he would have to actually ask. So he did. After dinner with a pretty
            cute card and his hands shaking, but not as much as before, he asked
            and made it official.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--anniversary"
          contentStyle={{ background: "#fc4a68", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #fc4a68" }}
          date="28 October 2023"
          // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "transparent", color: "#000" }}
          //   icon={<WorkIcon />}
          icon={<OneIcon />}
        >
          <h3 className="vertical-timeline-element-title">One Year</h3>
          <h4 className="vertical-timeline-element-subtitle">TBD</h4>
          <p>
            A whole year has passed, but it didn&apos;t even feel that long. In
            love and going strong.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};
export default Timeline;
