import Card from "@/components/card/card";

import data from "../../data.json";
import StoryCardList from "@/components/story-card/story-card-list";
import Feature from "@/components/feature/feature";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="section-1">
        <Card
          title="CREATE AND SHARE YOUR PHOTO STORIES."
          body="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          link="GET AN INVITE"
          style={{ backgroundColor: "black", color: "white" }}
        />
        <img
          className="tile-image"
          src="/home/desktop/create-and-share.jpg"
          alt="create-image"
        ></img>
      </div>
      <div className="section-2">
        <img
          className="tile-image"
          src="/home/desktop/beautiful-stories.jpg"
          alt="beautiful-image"
        ></img>
        <Card
          title="BEAUTIFUL STORIES EVERY TIME"
          body="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          link="VIEW THE STORIES"
          style={{ backgroundColor: "white", color: "black" }}
        />
      </div>
      <div className="section-3">
        <Card
          title="DESIGNED FOR EVERYONE"
          body="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
          link="VIEW THE STORIES"
          style={{ backgroundColor: "white", color: "black" }}
        />
        <img
          className="tile-image"
          src="/home/desktop/designed-for-everyone.jpg"
          alt="designed-image"
        ></img>
      </div>
      <StoryCardList list={data} amount={4} />
      <div className="features-list">
        <Feature
          icon={"/features/desktop/responsive.svg"}
          header={"100% Responsive"}
          description={
            "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
          }
        />
        <Feature
          icon={"/features/desktop/no-limit.svg"}
          header={"No Photo Upload Limit"}
          description={
            "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          }
        />
        <Feature
          icon={"/features/desktop/embed.svg"}
          header={"Available to Embed"}
          description={
            "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
          }
        />
      </div>
    </main>
  );
}
