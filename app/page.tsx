export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">
        {/* Hero */}
        <section className="space-y-4">
          <p className="text-sm text-zinc-400">Senior Software Engineer · Backend</p>
          <h1 className="text-4xl font-bold tracking-tight">
            Riya Bansal
          </h1>
          <p className="max-w-2xl text-zinc-300">
            Java / Spring Boot backend engineer specialising in microservices, data workflows and high‑reliability systems.
          </p>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Programming Languages</h3>
              <p>Java · Groovy · Python</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Backend Frameworks</h3>
              <p>Spring · Grails · Microservices · REST APIs</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Tools</h3>
              <p>Git · Jenkins · Docker · CI/CD Pipelines</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Databases</h3>
              <p>MongoDB · MySQL · Redis</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Messaging</h3>
              <p>Kafka · REST · SOAP</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Cloud & Concepts</h3>
              <p>AWS S3 · DSA · LLD · HLD</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Experience</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Airtel Digital · Senior Software Engineer</h3>
              <p className="text-sm text-zinc-400">Dec 2024 – Present</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                <li>Built FWA → FTTH migration cancellation workflow using Java, Spring Boot, Kafka and Redis.</li>
                <li>Designed rental rebate automation listener with MySQL based state rules and validations.</li>
                <li>Integrated Number Management System (reserve / unreserve / availability) with robust error handling.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Agilon Healthcare · Senior Software Engineer</h3>
              <p className="text-sm text-zinc-400">Mar 2023 – Dec 2024</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                <li>Upgraded Groovy codebase to Java with Spring, improving performance and security.</li>
                <li>Built SFTP → S3 → Snowflake data pipeline using Mirth, Python and PySpark.</li>
                <li>Implemented Kafka integration handling ~50k messages/day with dynamic partitioning.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">MPHRX · Software Engineer</h3>
              <p className="text-sm text-zinc-400">Aug 2021 – Mar 2023</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                <li>Customized Minerva for contactless patient registration, improving admin efficiency by ~30%.</li>
                <li>Automated Medhost data entry with bots, cutting manual effort significantly.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Celebal Technologies · Intern</h3>
              <p className="text-sm text-zinc-400">Feb 2021 – Jul 2021</p>
              <p className="mt-2 text-sm text-zinc-300">
                Built Employee Onboarding app using Canvas Apps, Model‑Driven Apps and Power Automate.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Education</h2>
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
            <h2 className="text-2xl font-semibold">Achievements & Awards</h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>3rd rank in InterviewBit DSA Mock Contest (Apr 2024).</li>
              <li>8th rank in InterviewBit SQL Mock Contest (Sep 2023).</li>
              <li>Promoted to Software Engineer II at MPHRX for contactless project work.</li>
              <li>Silver medal for highest academic standing at JECRC University.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-3 pb-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-sm text-zinc-300">
            Open to backend and platform roles. Reach out on LinkedIn or email.
          </p>
        </section>
      </main>
    </div>
  );
}
