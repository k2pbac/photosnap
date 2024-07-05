import StoryCardList from "@/components/story-card/story-card-list";

import data from "../../../data.json";
import Arrow from "@/components/arrow/arrow";

export default function Stories() {
  const featuredStory = {
    title: "HAZY FULL MOON OF APPALACHIA",
    date: "March 2nd 2020",
    author: "John Appleseed",
    content:
      'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
  };

  return (
    <div className="stories">
      <div className="header">
        <div className="featured-story">
          <p className="sub-header">LAST MONTH'S FEATURED STORY</p>
          <h2>{featuredStory.title}</h2>
          <p className="date">
            <span>{featuredStory.date}</span> by {featuredStory.author}
          </p>
          <p className="content">{featuredStory.content}</p>
          <Arrow
            text={"READ THE STORY"}
            isFooter={false}
            className={""}
            style={{ color: "white" }}
          />
        </div>
        <img
          src="/assets/stories/desktop/moon-of-appalacia.jpg"
          alt="featured-story"
        />
      </div>
      <StoryCardList showDate={true} list={data} amount={data.length} />
    </div>
  );
}
