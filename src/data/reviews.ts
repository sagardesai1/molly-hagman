export const reviewStats = {
  google: {
    count: 18,
    rating: 5,
    url: "https://www.google.com/maps?cid=1550203185097807193",
  },
  superprof: {
    count: 39,
    rating: 5,
    url: "https://www.superprof.com/learn-salsa-bachata-with-international-professional-latin-dancer-molly-hagman-private-lessons-and-wedding-dance-choreography-for.html",
  },
} as const;

export type Review = {
  name: string;
  quote: string;
  source: "Superprof" | "Google";
  sourceUrl: string;
};

/** Verbatim student quotes from Molly’s public Superprof profile. */
export const featuredReviews: Review[] = [
  {
    name: "Kevin",
    quote:
      "I’ve had multiple ballroom teachers over the years and by far Molly exceeds them all in her ability to break down complex movements into fundamental, easy-to-grasp moves. She has patience of a true professional and kept detailed track of my progress across lessons.",
    source: "Superprof",
    sourceUrl: reviewStats.superprof.url,
  },
  {
    name: "Daniel",
    quote:
      "Molly is punctual and the consummate professional. I have taken several private bachata lessons with her. I have made so much progress with her. She is patient and helps break down all the steps for me. I would 11/10 recommend Molly.",
    source: "Superprof",
    sourceUrl: reviewStats.superprof.url,
  },
  {
    name: "Dimas D.",
    quote:
      "From the very first class, she created an inviting atmosphere that immediately put me at ease. She not only taught the fundamental steps and techniques but also shared the rich cultural background of the dance. If you’re looking to learn salsa, I wholeheartedly recommend her.",
    source: "Superprof",
    sourceUrl: reviewStats.superprof.url,
  },
  {
    name: "Kyle",
    quote:
      "Enthusiastic, patient, kind — a total professional. Adapted to whatever level and circumstance we needed and by the end of it we were really moving. Seldom does such a transformation take shape in only an hour. 10/10 recommend Molly to all.",
    source: "Superprof",
    sourceUrl: reviewStats.superprof.url,
  },
  {
    name: "Lizzette",
    quote:
      "Had a great lesson with Molly. She is a great dancer and a great teacher. She is extremely patient and uses a variety of customized techniques to help you learn the steps according to your individual capacity and learning style.",
    source: "Superprof",
    sourceUrl: reviewStats.superprof.url,
  },
  {
    name: "Nina",
    quote:
      "Molly’s lesson was beyond expectations — it felt like an in-person class even though it was only on my iPad. I would definitely recommend to any single or couple that wants to learn, especially if you’re hesitant about webcam lessons.",
    source: "Superprof",
    sourceUrl: reviewStats.superprof.url,
  },
];
