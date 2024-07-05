import StoryCardList from "@/components/story-card/story-card-list";

import data from "../../../data.json";

export default function Stories() {
  return (
    <div className="stories">
      <div className="header">
        <img
          src="/assets/stories/desktop/moon-of-appalacia.jpg"
          alt="featured-story"
        />
      </div>
      <StoryCardList showDate={true} list={data} amount={data.length} />
    </div>
  );
}
