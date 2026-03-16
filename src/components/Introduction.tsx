export function Introduction() {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-center px-6 py-20 bg-gray-50 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h1 className="font-heading font-bold text-hero-lg text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3 flex-wrap">
          <span>Hi, I'm <span className="text-purple-500">Kalyani</span></span>
        </h1>
        <p className="font-heading font-semibold text-xl text-purple-500 mb-6">
          SDE-1 @ Akrivia HCM
        </p>
        <p className="font-body text-lg text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          I build impactful software that scales. Specialized in the{' '}
          <span className="font-semibold text-gray-900 dark:text-white">MEAN Stack</span>{' '}
          (MongoDB, Express.js, Angular, Node.js), I contribute to HR management solutions and full-stack
          web applications. Passionate about clean code, performance, and user-centric design.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-heading font-semibold transition-colors"
        >
          Explore my journey
        </a>
      </div>
    </section>
  )
}
