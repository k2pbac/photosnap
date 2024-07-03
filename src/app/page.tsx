// import Image from "next/image";

import Card from "@/components/card/card";
import Image from "next/image";

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
        <Image
          className="tile-image"
          src="/home/desktop/create-and-share.jpg"
          alt="create-image"
          width={650}
          height={650}
        ></Image>
      </div>
      <div className="section-2">
        <Image
          className="tile-image"
          src="/home/desktop/beautiful-stories.jpg"
          alt="create-image"
          width={650}
          height={650}
        ></Image>
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
        <Image
          className="tile-image"
          src="/home/desktop/designed-for-everyone.jpg"
          alt="create-image"
          width={650}
          height={650}
        ></Image>
      </div>
    </main>
  );
}
