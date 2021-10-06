import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{ greeting: string }> = async ({
  locale: localeP,
}) => {
  return {
    props: {
      greeting: `(${localeP}) 127 Straßengang, with da cool kids:`,
    },
  };
};

export default function Home({
  greeting,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="font-mono text-xl code">
          {greeting} <span className="text-purple-700">Nextjs</span>,{" "}
          <span className="text-indigo-700">TailwindCSS</span> and{" "}
          <span className="text-gray-700">TypeScript</span>
        </h1>
      </main>
    </div>
  );
}
