const features = [
  {
    id: 1,
    title: "Feature One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget lorem in varius.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
  },
  {
    id: 2,
    title: "Feature Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget lorem in varius.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
  },
  {
    id: 3,
    title: "Feature Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget lorem in varius.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
  },
];

export default function Features() {
  return (
    <section className="w-full  py-12">
      <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}

interface FeatureProps {
  readonly title: string;
  readonly description: string;
  readonly image: string;
}

export function Feature({ title, description, image }: FeatureProps): JSX.Element | null {
  return (
    <div className="space-y-8 xl:space-y-10">
      <img
        alt="Placeholder"
        className="aspect-video w-full overflow-hidden rounded-xl object-cover"
        height="365"
        src={image}
        width="650"
      />
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">
            {title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
