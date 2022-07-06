import { Section } from "../Section";

const Hero = () => {
  return (
    <Section className="flex justify-center relative" id="hero">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-[600px] -left-[200px] -top-[200px] fill-primary"
      >
        <path
          d="M26.3,-43.6C38.7,-33,56.4,-33.4,63.6,-26.5C70.8,-19.5,67.5,-5.1,58.7,3.6C49.9,12.3,35.7,15.4,29.1,28.1C22.6,40.7,23.8,62.9,16.9,71.2C10,79.4,-5,73.7,-18.3,67.4C-31.7,61.2,-43.4,54.5,-56.3,45.5C-69.1,36.5,-83.2,25.2,-81.1,14C-79.1,2.8,-60.9,-8.4,-53.3,-24C-45.7,-39.7,-48.5,-59.8,-41.4,-72.7C-34.3,-85.6,-17.1,-91.3,-5.1,-83.4C7,-75.5,14,-54.1,26.3,-43.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-[450px] -right-[200px] -bottom-[150px] fill-primary"
      >
        <path
          d="M48.3,-46.1C61.4,-35.1,70.1,-17.6,69.8,-0.4C69.4,16.8,59.9,33.6,46.8,49.4C33.6,65.1,16.8,79.8,-2.4,82.2C-21.5,84.5,-43.1,74.6,-57.4,58.8C-71.8,43.1,-79,21.5,-74.4,4.6C-69.8,-12.3,-53.3,-24.6,-39,-35.7C-24.6,-46.7,-12.3,-56.4,2.6,-59C17.6,-61.7,35.1,-57.2,48.3,-46.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="flex flex-col justify-center items-center relative">
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-black uppercase w-fit">
          Reuben
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-black uppercase w-fit">
          Drummond
        </h1>
        <p className="font-bold uppercase text-3xl bg-gradient-to-r from-primary to-primary-light text-transparent dark:text-transparent bg-clip-text">
          Web developer
        </p>
      </div>
    </Section>
  );
};

export default Hero;
