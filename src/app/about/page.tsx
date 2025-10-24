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
  title: 'About',
  description:
    'Sebastian Breitzke: Director R&D with 20+ years building logistics software. Embracing reality\'s complexity and delivering pragmatic solutions.',
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
            I'm Sebastian Breitzke. I embrace reality's complexity and deliver pragmatic solutions.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              "There's only one world, it's always dirty." Most developers talk about "best practices"
              and "ideal solutions." I talk about reality. The real world is never perfect, never ideal,
              never as clean as we'd like. But that's okay. The skill isn't in imagining perfect
              conditions - it's in embracing the messiness and delivering value anyway.
            </p>
            <p>
              For over 20 years, I've been building logistics software for companies like Mercedes-Benz,
              Otto Group, and DHL. As Director R&D at ecovium, I lead the development of the SimpleChain
              ecosystem - evaluated by Gartner as groundbreaking and market-appropriate. I manage projects
              with budgets between €500,000 and €1.5 million, and I still code. Because the best
              leaders stay hands-on.
            </p>
            <p>
              Before ecovium, I led development of V-LOG 6.0 at MHP Software, one of the company's
              highest-revenue products. I successfully migrated over 1,000 clients to the new version
              and established a nearshore development center in Tenerife that grew to 20+ employees.
              These experiences taught me that successful migrations depend on clear communication, not
              perfect planning.
            </p>
            <p>
              Beyond code, I'm an avid tango dancer - because tango, like software development, requires
              responding to reality in the moment, not following rigid choreography. I'm an experienced
              cook (friends are always "begeistert" when they eat at my place), and I'm deeply curious
              about physics, astronomy, history, and archaeology. I want to understand how the world
              actually works, not how we imagine it.
            </p>
            <p>
              I'm passionate about my work, and my driving force is the success of my clients. Not
              building perfect architectures - delivering systems that create measurable value. Not
              chasing trends - applying proven patterns pragmatically. Not promising ideal solutions -
              embracing reality's messiness and succeeding anyway.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.linkedin.com/in/sebastian-breitzke" icon={LinkedInIcon}>
              Follow on LinkedIn
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
