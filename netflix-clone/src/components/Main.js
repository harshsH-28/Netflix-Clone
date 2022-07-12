import React, { useState } from "react";
import Line from "./Line";
import Section from "./Section";
import FAQ from "./FAQ";
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
      <div className="bg-black flex flex-col justify-center items-center">
        <h1 className="text-white font-semibold text-2xl mt-10 mb-6">
          Frequently Asked Questions
        </h1>
        <FAQ
          heading="What is Netflix?"
          desc="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        />
        <FAQ
          heading="How much does Netflix cost?"
          desc="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
        />
        <FAQ
          heading="Where can I watch?"
          desc="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <FAQ
          heading="How do I cancel"
          desc="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <FAQ
          heading="What can i watch on Netflix?"
          desc="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />
        <FAQ
          heading="is Netflix good for kids?"
          desc="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />
        <p className="text-white text-center text-xl mb-4 mt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col items-center mb-14">
          <input
            type="email"
            placeholder="Email address"
            className="border-1 border-slate-600 w-[90vw] px-2 py-3 text-black focus:outline-none focus:border-blue-600 focus:border-1"
          />
          <button className="bg-[#e50914] mt-4 px-4 py-2 rounded-sm text-white text-center">
            Get Started &#10095;
          </button>
        </div>
      </div>
      <Line />
    </div>
  );
}
