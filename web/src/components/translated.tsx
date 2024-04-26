import { Avatar } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { languages, Language } from '@/config/site';

export const Translated = () => {
  const CountryAvatar = ({ lang }: { lang: Language }) =>
    lang.countryCode ? (
      <Avatar
        alt={lang.name}
        className='w-12 h-12'
        aria-label={lang.name}
        src={`/flags/${lang.countryCode}.svg`}
      />
    ) : (
      <Avatar
        alt={lang.name}
        aria-label={lang.name}
        className='w-12 h-12'
        name={lang.code.toUpperCase()}
      />
    );
  return (
    <section className='border-t border-b border-divider px-8 mt-10 text-center'>
      <div className='my-8'>
        <h3 className={title()}>Translated in multiple languages</h3>
        <div
          x-data='{}'
          x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'
        >
          <ul
            x-ref='logos'
            className='flex gap-x-2 mt-8 items-center justify-center md:justify-start [&_li]:mx-8 [&_span]:max-w-none animate-infinite-scroll'
          >
            {languages.map((lang) => (
              <li key={lang.code}>
                <CountryAvatar lang={lang} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
