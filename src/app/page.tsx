"use client";

import Card from "@/components/card/card";

import data from "../../data.json";
import featuresData from "./features/features.json";
import StoryCardList from "@/components/story-card/story-card-list";
import FeatureList from "@/components/feature/feature-list";
import { useEffect, useState } from "react";
import ImageContainer from "@/components/image-container/image-container";

export default function Home() {
  const [deviceType, setDeviceType] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  useEffect(() => {
    if (window.innerWidth <= 540) setDeviceType("mobile");
    else if (window.innerWidth <= 864) setDeviceType("tablet");
  }, []);

  return (
    <main className="min-h-screen ">
      <div className="section-1">
        <Card
          title="CREATE AND SHARE YOUR PHOTO STORIES."
          body="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          link="GET AN INVITE"
          style={{ backgroundColor: "black", color: "white" }}
        />
        <ImageContainer image={"create-and-share.jpg"} />
      </div>
      <div className="section-2">
        <ImageContainer image={"beautiful-stories.jpg"} />
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
        <ImageContainer image={"designed-for-everyone.jpg"} />
      </div>
      <StoryCardList list={data} amount={4} />
      <FeatureList data={featuresData} amount={3} />
    </main>
  );
}
