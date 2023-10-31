export type Experience = {
  title: string;
  date: string;
  description: string;
};

export type Experiences = Experience[];

export default function getExperiences(): Experiences {
  const experiences: Experiences = [];

  return experiences;
}
