import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Sebastian Breitzke: Director R&D mit über 20 Jahren Erfahrung in der Logistiksoftware-Entwicklung. Ich nehme die Komplexität der Realität an und liefere pragmatische Lösungen.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Sebastian Breitzke"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Ich bin Sebastian Breitzke. Ich nehme die Komplexität der Realität an und liefere pragmatische Lösungen.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              &ldquo;Es gibt nur eine Welt, und die ist immer dreckig.&rdquo; Die meisten Entwickler reden über &ldquo;Best Practices&rdquo;
              und &ldquo;ideale Lösungen&rdquo;. Ich rede über die Realität. Die echte Welt ist niemals perfekt, niemals ideal,
              niemals so sauber, wie wir sie gerne hätten. Aber das ist in Ordnung. Die Kunst liegt nicht darin,
              sich perfekte Bedingungen vorzustellen - sondern darin, das Chaos anzunehmen und trotzdem Wert zu liefern.
            </p>
            <p>
              Seit über 20 Jahren entwickle ich Logistiksoftware für Unternehmen wie Mercedes-Benz, Otto Group und DHL.
              Als Director R&D bei ecovium leite ich die Entwicklung des SimpleChain-Ecosystems - von Gartner als
              wegweisend und marktgerecht bewertet. Ich manage Projekte mit Budgets zwischen 500.000 und 1,5 Millionen
              Euro, und ich programmiere immer noch selbst. Denn die besten Führungskräfte bleiben hands-on.
            </p>
            <p>
              Vor ecovium leitete ich bei MHP Software die Entwicklung von V-LOG 6.0, einem der umsatzstärksten
              Produkte des Unternehmens. Ich habe erfolgreich über 1.000 Kunden auf die neue Version migriert und ein
              Nearshore-Entwicklungszentrum auf Teneriffa aufgebaut, das auf über 20 Mitarbeiter gewachsen ist. Diese
              Erfahrungen haben mir gezeigt, dass erfolgreiche Migrationen von klarer Kommunikation abhängen, nicht von
              perfekter Planung.
            </p>
            <p>
              Jenseits des Codes bin ich ein leidenschaftlicher Tangotänzer - denn Tango erfordert, wie die
              Softwareentwicklung, auf die Realität im Moment zu reagieren, nicht einer starren Choreografie zu folgen.
              Ich bin ein erfahrener Koch (Freunde sind immer begeistert, wenn sie bei mir essen), und ich bin tief
              interessiert an Physik, Astronomie, Geschichte und Archäologie. Ich will verstehen, wie die Welt wirklich
              funktioniert, nicht wie wir sie uns vorstellen.
            </p>
            <p>
              Ich bin mit Herz bei der Sache, und mein Antrieb ist der Erfolg meiner Kunden. Keine perfekten
              Architekturen bauen - Systeme liefern, die messbaren Wert schaffen. Nicht Trends hinterherlaufen -
              bewährte Muster pragmatisch anwenden. Keine idealen Lösungen versprechen - das Chaos der Realität
              annehmen und trotzdem erfolgreich sein.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.linkedin.com/in/sebastian-breitzke" icon={LinkedInIcon}>
              Folge auf LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:sb@sbreitzke.net"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              sb@sbreitzke.net
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
