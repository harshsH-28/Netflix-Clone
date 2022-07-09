import React from "react";
import Line from "./Line";
import Section from "./Section";
import poster1 from "../Assets/tv.png";
import poster2 from "../Assets/poster.jpg";
import poster3 from "../Assets/poster2.png";
import poster4 from "../Assets/poster3.png";

export default function Main() {
  return (
    <div>
      <Line />
      <Section
        heading="Enjoy on your TV."
        sheading="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        img={poster1}
      />
      <Line />
      <Section
        heading="Download your shows to watch offline."
        sheading="Save your favourites easily and always have something to watch.
"
        img={poster2}
      />
      <Line />
      <Section
        heading="Watch everywhere."
        sheading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img={poster3}
      />
      <Line />
      <Section
        heading="Create profiles for children."
        sheading="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        img={poster4}
      />
      <Line />
    </div>
  );
}
