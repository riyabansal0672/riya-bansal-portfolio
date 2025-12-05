export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <main className="mx-auto max-w-5xl px-6 py-12 space-y-20">

        {/* Hero */}
        <section className="space-y-6">
          <p className="text-sm text-zinc-400">Senior Software Engineer · Backend · Curious Mind</p>
          <h1 className="text-5xl font-bold tracking-tight">Riya Bansal</h1>
          <p className="max-w-2xl text-zinc-300 text-lg">
            Backend engineer building microservices & workflows by day, sketching & writing short stories by night. Exploring tech and creativity together.
          </p>
          <a
            href="/story"
            className="inline-block mt-4 px-5 py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Check out my interactive story
          </a>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Skills & Hobbies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Programming Languages</h3>
              <p>Java · Groovy · Python – building reliable backend systems & fun scripts.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Backend Frameworks</h3>
              <p>Spring · Grails · Microservices · REST APIs – powering scalable workflows.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Tools</h3>
              <p>Git · Jenkins · Docker · CI/CD Pipelines – automation & deployment mastery.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Databases</h3>
              <p>MongoDB · MySQL · Redis – data storage & caching expertise.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Messaging & APIs</h3>
              <p>Kafka · REST · SOAP – robust event-driven integrations.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Hobbies & Creative Skills</h3>
              <p>Sketching, Writing, Crochet – creativity fuels problem solving.</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold">Experience</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Airtel Digital · Senior Software Engineer</h3>
              <p className="text-sm text-zinc-400">Dec 2024 – Present</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-zinc-300">
                <li>Built FWA → FTTH migration cancellation workflow, reducing manual errors and saving team 5 hours/day.</li>
                <li>Designed rental rebate automation listener with MySQL state rules, enabling seamless process execution.</li>
                <li>Integrated Number Management System (reserve/unreserve/availability) with robust error handling.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Agilon Healthcare · Senior Software Engineer</h3>
              <p className="text-sm text-zinc-400">Mar 2023 – Dec 2024</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-zinc-300">
                <li>Upgraded Groovy codebase to Java with Spring, improving performance and security.</li>
                <li>Built SFTP → S3 → Snowflake data pipeline using Mirth, Python, and PySpark.</li>
                <li>Implemented Kafka integration handling ~50k messages/day with dynamic partitioning.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">MPHRX · Software Engineer</h3>
              <p className="text-sm text-zinc-400">Aug 2021 – Mar 2023</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-zinc-300">
                <li>Customized Minerva for contactless patient registration, improving admin efficiency by ~30%.</li>
                <li>Automated Medhost data entry with bots, cutting manual effort significantly.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Celebal Technologies · Intern</h3>
              <p className="text-sm text-zinc-400">Feb 2021 – Jul 2021</p>
              <p className="mt-2 text-zinc-300">
                Built Employee Onboarding app using Canvas Apps, Model‑Driven Apps and Power Automate.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Education</h2>
            <div>
              <h3 className="font-medium">Scaler Academy</h3>
              <p className="text-sm text-zinc-400">Upskilling · 2022 – Present</p>
            </div>
            <div>
              <h3 className="font-medium">JECRC University · MCA</h3>
              <p className="text-sm text-zinc-400">2020 – 2022 · GPA 9.83/10</p>
            </div>
            <div>
              <h3 className="font-medium">Rajasthan University · BCA</h3>
              <p className="text-sm text-zinc-400">2017 – 2020 · 80%</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Achievements & Awards</h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <span className="px-2 py-1 bg-yellow-500 text-black rounded text-xs">3rd in InterviewBit DSA Mock Contest</span>
              </li>
              <li>
                <span className="px-2 py-1 bg-green-500 text-black rounded text-xs">8th in InterviewBit SQL Mock Contest</span>
              </li>
              <li>
                <span className="px-2 py-1 bg-blue-500 text-black rounded text-xs">Promoted to Software Engineer II at MPHRX</span>
              </li>
              <li>
                <span className="px-2 py-1 bg-purple-500 text-black rounded text-xs">Silver medal at JECRC University</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-3 pb-12">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-sm text-zinc-300">
            Open to backend and platform roles. Reach out on <a href="https://www.linkedin.com/in/riyabansal" className="text-blue-400 underline">LinkedIn</a> or via email.
          </p>
        </section>

      </main>
    </div>
  );
}
