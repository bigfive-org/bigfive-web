'use client';

import { useExperiment } from '@/hooks/use-experiment';
import { sendGAEvent } from '@next/third-parties/google';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Image } from '@nextui-org/image';
import {
  ArrowRightIcon,
  HeartFilledIcon,
  ShieldIcon
} from '@/components/icons';

export default function EnterpriseCTA() {
  const exp = useExperiment('cta_variant');
  const { theme } = useTheme();
  const hasTrackedView = useRef(false);

  useEffect(() => {
    if (exp && !hasTrackedView.current) {
      sendGAEvent('event', 'experiment_view', {
        experiment_id: 'cta_variant',
        variant: exp.variant,
        event_category: 'experiments',
        event_label: `cta_variant_${exp.variant}`
      });
      hasTrackedView.current = true;
    }
  }, [exp]);

  if (!exp) return null;

  const handleClick = () => {
    sendGAEvent('event', 'experiment_click', {
      experiment_id: 'cta_variant',
      variant: exp.variant,
      theme: theme || 'system',
      action: 'cta_click',
      event_category: 'experiments',
      event_label: `cta_variant_${exp.variant}_${theme || 'system'}_click`
    });

    const utmParams = new URLSearchParams({
      utm_source: 'bigfive-web',
      utm_medium: 'cta',
      utm_campaign: `pair_perspective_cta_${exp.variant}`,
      utm_content: 'pair_perspective_cta_component'
    });

    window.open(`https://pairperspective.com/?${utmParams.toString()}`, '_blank');
  };

  return (
    <section className='relative mt-10 mx-2 overflow-hidden rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50 via-white to-purple-50 shadow-medium dark:border-rose-300/10 dark:from-rose-950/40 dark:via-default-900/80 dark:to-purple-950/40'>
      <div className='absolute -right-16 -top-20 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/10' />
      <div className='relative flex flex-col items-stretch gap-5 p-5 sm:flex-row sm:items-center sm:p-6'>
        <div className='min-w-0 flex-1'>
          <div className='mb-2 flex items-center gap-2'>
            <span className='flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-200'>
              <HeartFilledIcon className='h-4 w-4' />
            </span>
            <span className='text-xs font-semibold uppercase tracking-[0.16em] text-rose-700 dark:text-rose-200'>
              For couples
            </span>
          </div>
          <h3 className='text-xl font-bold tracking-tight text-rose-950 dark:text-white sm:text-2xl'>
            See your relationship from both sides
          </h3>
          <p className='mt-2 max-w-xl text-sm leading-6 text-rose-900/70 dark:text-rose-100/75'>
            Answer 57 questions separately, then explore your shared strengths
            and the differences worth talking about.
          </p>
          <div className='mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-rose-900/70 dark:text-rose-100/75'>
            <span className='inline-flex items-center gap-1.5'>
              <ShieldIcon className='h-3.5 w-3.5 text-rose-600 dark:text-rose-300' />
              Private and secure
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <HeartFilledIcon className='h-3.5 w-3.5 text-rose-600 dark:text-rose-300' />
              Free · no account
            </span>
          </div>
          <button
            type='button'
            onClick={handleClick}
            className='mt-5 inline-flex items-center justify-center rounded-full bg-rose-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 dark:bg-rose-500 dark:hover:bg-rose-400 dark:focus:ring-offset-default-900'
          >
            Try Pair Perspective
            <ArrowRightIcon className='ml-2 h-4 w-4' />
          </button>
        </div>
        <div className='hidden w-28 shrink-0 self-stretch overflow-hidden rounded-xl border border-rose-200 bg-white/70 shadow-sm sm:block dark:border-rose-200/10 dark:bg-white/5'>
          <Image
            src='/blog/pairperspective.webp'
            alt='Example of a shared Pair Perspective relationship result'
            removeWrapper
            className='h-full w-full object-cover object-top'
          />
        </div>
      </div>
    </section>
  );
}
