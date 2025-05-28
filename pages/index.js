import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center bg-[#F58220] text-white p-4 shadow-md">
        <div className="text-lg font-bold">Dr. Ursula</div>
        <ul className="flex space-x-4 text-sm">
          <li><Link href="#oxygen">Oxygen Company</Link></li>
          <li><Link href="#flame">Flame Hub</Link></li>
          <li><Link href="#rethink">Rethink Collective</Link></li>
          <li><Link href="#city">City Innovation</Link></li>
          <li><a href="mailto:info@theoxygencompany.co">Contact</a></li>
        </ul>
      </nav>

      <main className="p-8 space-y-12">
        <section className="text-center">
          <Image
            src="/133-BOI9XxM2mxw_upscaled.png"
            alt="Dr. Ursula"
            width={160}
            height={160}
            className="mx-auto rounded-full shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-4">Dr. Ursula</h1>
          <p className="text-lg italic mt-2">Heal. Lead. Transform—Everywhere We Live, Work, Play, and Worship.</p>
        </section>

        <section id="oxygen">
          <h2 className="text-2xl font-semibold">🔲 The Oxygen Company</h2>
          <p className="mt-2">Helping leaders, teams, and systems breathe better so they can build better.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Leadership transformation</li>
            <li>Organizational consulting</li>
            <li>Fractional leadership & wellness</li>
            <li>Container Integrity™ methodology</li>
            <li>AI, wellness, trauma-informed certification & training</li>
          </ul>
        </section>

        <section id="flame">
          <h2 className="text-2xl font-semibold">🔥 The Flame Hub</h2>
          <p className="mt-2">It’s more than a Sunday. It’s a lifestyle.</p>
          <ul className="list-disc list-inside mt-2">
            <li>🔥 Flame of Fire – Spiritual Formation</li>
            <li>💧 FlameWell – Wellness & Wholeness</li>
            <li>🌍 Flame United – Faith Meets Advocacy</li>
            <li>💼 Flame Legacy Labs – Business & Wealth</li>
          </ul>
        </section>

        <section id="rethink">
          <h2 className="text-2xl font-semibold">🟨 Rethink Collective</h2>
          <p className="mt-2">Youth incubator for leadership, wellness, and innovation. Future-ready, faith-infused.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Build – Entrepreneurship</li>
            <li>Elevate – Leadership Development</li>
            <li>Align – Wellness and Mental Health</li>
            <li>Transform – Social Impact</li>
          </ul>
          <div className="mt-6">
            <Image
              src="/Rethink Podcast.png"
              alt="Rethink Everything Podcast"
              width={640}
              height={640}
              className="rounded-xl shadow-md mx-auto"
            />
          </div>
        </section>

        <section id="city">
          <h2 className="text-2xl font-semibold">🏙️ City Innovation School</h2>
          <p className="mt-2">A future-focused high school reimagining education through faith, innovation, and wellness.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Leadership Development</li>
            <li>Entrepreneurship</li>
            <li>Creative Arts</li>
            <li>Prophetic Identity</li>
            <li>Wellness & Social Impact</li>
          </ul>
        </section>

        <footer className="text-center pt-8 border-t mt-12">
          <p className="text-sm">Contact us: <a href="mailto:info@theoxygencompany.co" className="text-[#F58220] underline">info@theoxygencompany.co</a></p>
          <p className="text-sm mt-2">© 2025 Dr. Ursula Ecosystem. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
