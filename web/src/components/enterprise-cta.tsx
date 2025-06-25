'use client';

import { useExperiment } from '@/hooks/use-experiment';
import { sendGAEvent } from '@next/third-parties/google';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import {
  BuildingIcon,
  UsersIcon,
  BarChartIcon,
  ShieldIcon,
  ZapIcon,
  CrownIcon,
  ArrowRightIcon
} from '@/components/icons';

export default function EnterpriseCTA() {
  const exp = useExperiment('cta_variant');
  const { theme } = useTheme();
  const hasTrackedView = useRef(false);

  useEffect(() => {
    if (exp && !hasTrackedView.current) {
      const eventData = {
        experiment_id: 'cta_variant',
        variant: exp.variant,
        event_category: 'experiments',
        event_label: `cta_variant_${exp.variant}`
      };

      sendGAEvent('event', 'experiment_view', eventData);

      // Mark that we've tracked this view
      hasTrackedView.current = true;
    }
  }, [exp, theme]);

  if (!exp) return null;

  const handleClick = (variant: string) => {
    const eventData = {
      experiment_id: 'cta_variant',
      variant: exp.variant,
      theme: theme || 'system',
      action: 'cta_click',
      event_category: 'experiments',
      event_label: `cta_variant_${exp.variant}_${theme || 'system'}_click`
    };

    sendGAEvent('event', 'experiment_click', eventData);

    const utmParams = new URLSearchParams({
      utm_source: 'bigfive-web',
      utm_medium: 'cta',
      utm_campaign: `enterprise_cta_${variant}`,
      utm_content: 'enterprise_cta_component'
    });

    window.open(`https://assesshumans.com/?${utmParams.toString()}`, '_blank');
  };

  if (!exp) return null;

  if (exp.variant === 'variant1') {
    return (
      <div className='mt-10 mx-2 rounded-xl box-border border-transparent bg-white/5 dark:bg-default-400/10  p-6 shadow-medium backdrop-blur-lg backdrop-saturate-[1.8]'>
        <div className='flex flex-col space-y-3'>
          <div className='flex flex-col-reverse sm:flex-row items-start justify-between gap-2'>
            <div>
              <h3 className='text-base font-bold '>
                Need personality insights for your business?
              </h3>
              <p className='text-base mt-0.5 text-default-500'>
                Unlock the professional version of BigFive for teams,
                recruitment, and organizational development.
              </p>
            </div>

            <span className='rounded-full bg-violet-100 dark:bg-violet-800 px-3 py-1 text-xs font-medium text-violet-800 dark:text-violet-100'>
              Enterprise
            </span>
          </div>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-3 flex-1'>
              <div className='flex items-center gap-2 text-xs text-default-700 font-medium'>
                <BuildingIcon className='lucide lucide-building2 h-4 w-4 text-violet-600' />
                <span>Team assessments</span>
              </div>
              <div className='flex items-center gap-2 text-xs text-default-700 font-medium'>
                <UsersIcon className='lucide lucide-users h-4 w-4 text-violet-600' />
                <span>Recruitment tools</span>
              </div>
              <div className='flex items-center gap-2 text-xs text-default-700 font-medium'>
                <BarChartIcon className='lucide lucide-bar-chart3 h-4 w-4 text-violet-600' />
                <span>Actionable Insights</span>
              </div>
            </div>
            <button
              onClick={() => handleClick('variant1')}
              className='flex flex-wrap w-full items-center justify-center rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 sm:w-auto sm:self-end'
            >
              Explore AssessHumans
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (exp.variant === 'variant2') {
    return (
      <div className='mt-10 mx-2 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-default-400/10 dark:to-default-500/10 box-border border-transparent shadow-medium backdrop-blur-lg backdrop-saturate-[1.8] rounded-lg p-4'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
          <div className='flex items-center gap-3'>
            <BuildingIcon className='h-5 w-5 text-violet-600' />
            <div>
              <p className='text-sm font-medium text-neutral-900 dark:text-white'>
                Need enterprise-level assessments?
              </p>
              <p className='text-xs text-neutral-500 dark:text-neutral-300'>
                Discover Assess Humans for teams and organizations
              </p>
            </div>
          </div>
          <div className='mt-3 sm:mt-0 sm:ml-4'>
            <button
              type='button'
              onClick={() => handleClick('variant2')}
              className='inline-flex flex-wrap items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-white dark:ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-9 rounded-md px-3 border-violet-300 dark:border-violet-600 text-violet-700 hover:bg-violet-50 bg-white dark:bg-violet-600 dark:text-white dark:hover:bg-violet-700 w-full sm:w-auto'
            >
              Learn More <ArrowRightIcon className='ml-1 h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (exp.variant === 'variant3') {
    return (
      <div className='mt-10 mx-2 rounded-lg bg-white dark:bg-default-400/10 text-neutral-900 dark:text-white border-neutral-100 box-border border-transparent shadow-medium backdrop-blur-lg backdrop-saturate-[1.8]'>
        <div className='flex flex-col space-y-1.5 p-6 pb-3'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
            <span className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-violet-100 dark:bg-violet-600 text-violet-700 dark:text-white border-violet-200 dark:border-violet-500 sm:order-2 sm:ml-auto w-max'>
              Enterprise
            </span>
            <div className='flex items-center gap-2 sm:order-1'>
              <CrownIcon className='h-5 w-5 text-violet-600' />
              <h3 className='font-semibold tracking-tight text-lg dark:text-white'>
                Unlock Pro Features for Teams
              </h3>
            </div>
          </div>
          <p className='text-sm text-default-500 dark:text-white'>
            Advanced personality assessments for teams, recruitment, and
            organizational development. Free to try, no credit card needed.
          </p>
        </div>
        <div className='p-6 pt-0'>
          <div className='flex flex-wrap items-center gap-4 text-sm text-default-500 dark:text-white mb-3'>
            <div className='flex items-center gap-1'>
              <UsersIcon className='h-4 w-4 dark:text-white' />
              <span>Team Management</span>
            </div>
            <div className='flex items-center gap-1'>
              <BarChartIcon className='h-4 w-4 dark:text-white' />
              <span>Advanced Analytics</span>
            </div>
            <div className='flex items-center gap-1'>
              <ShieldIcon className='h-4 w-4 dark:text-white' />
              <span>Private & Secure</span>
            </div>
          </div>
          <button
            type='button'
            onClick={() => handleClick('variant3')}
            className='inline-flex flex-wrap items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-white dark:ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-violet-600 dark:bg-violet-600 text-white dark:text-white hover:bg-violet-700 dark:hover:bg-violet-700 h-10 px-4 py-2 w-full'
          >
            Explore Assess Humans
          </button>
        </div>
      </div>
    );
  }

  if (exp.variant === 'variant4') {
    return (
      <div className='mt-10 mx-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-neutral-50 dark:bg-default-400/10 box-border border-transparent shadow-medium backdrop-blur-lg backdrop-saturate-[1.8] rounded-lg'>
        <div className='flex flex-row items-center gap-3 flex-1'>
          <div className='flex-shrink-0'>
            <div className='w-8 h-8 bg-violet-100 dark:bg-violet-200 rounded-full flex items-center justify-center'>
              <ZapIcon className='h-4 w-4 text-violet-600' />
            </div>
          </div>
          <div className='flex-1 min-w-0'>
            <p className='text-sm font-semibold text-neutral-900 dark:text-white'>
              For Teams and Organizations
            </p>
            <p className='text-xs text-neutral-500 dark:text-neutral-300 truncate font-semibold'>
              Take assessments further! Manage teams, track results, and make
              data-driven decisions.
            </p>
          </div>
        </div>
        <div className='mt-2 sm:mt-0 w-full sm:w-auto sm:ml-3 sm:self-end'>
          <button
            type='button'
            onClick={() => handleClick('variant4')}
            className='inline-flex flex-wrap items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-white dark:ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-violet-600 dark:bg-violet-600 text-white dark:text-white hover:bg-violet-700 dark:hover:bg-violet-700 h-9 rounded-md px-3 w-full sm:w-auto'
          >
            Discover Assess Humans
          </button>
        </div>
      </div>
    );
  }

  if (exp.variant === 'variant5') {
    return (
      <div className='mt-10 mx-2 bg-gradient-to-br from-blue-700 via-violet-800 to-fuchsia-800 text-white dark:text-white rounded-xl p-6'>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <div className='flex items-center gap-2 mb-2'>
              <BuildingIcon className='h-6 w-6' />
              <h4 className='text-xl font-bold'>
                Discover. Understand. Improve.
              </h4>
            </div>
            <p className='text-violet-100 dark:text-violet-100 mb-4 text-sm font-semibold'>
              Assess Humans is built for professionals who need deeper insight
              into people. Set up assessments for hiring, coaching, or
              development. Manage teams, organize respondents, and review
              analytics to support growth, improve collaboration, and make
              better decisions with data.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold bg-white/20 dark:bg-white/10 text-white border-white/30 dark:border-white/20'>
                Custom Reports
              </span>
              <span className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold bg-white/20 dark:bg-white/10 text-white border-white/30 dark:border-white/20'>
                Team Management
              </span>
              <span className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold bg-white/20 dark:bg-white/10 text-white border-white/30 dark:border-white/20'>
                Scientifically Validated
              </span>
            </div>
          </div>
        </div>
        <button
          type='button'
          onClick={() => handleClick('variant5')}
          className='inline-flex flex-wrap items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-white dark:ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-violet-700 hover:bg-neutral-100'
        >
          Explore Assess Humans <ArrowRightIcon className='ml-2 h-4 w-4' />
        </button>
      </div>
    );
  }

  if (exp.variant === 'variant6') {
    return (
      <div className='mt-10 mx-2 bg-neutral-900 dark:bg-default-400/10 text-white dark:text-white p-4 rounded-lg'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mx-auto gap-3'>
          <div className='flex items-center gap-3'>
            <div className='flex-shrink-0'>
              <BuildingIcon className='h-5 w-5 text-violet-400 dark:text-white' />
            </div>
            <div>
              <p className='text-sm font-bold'>
                Enterprise Solutions Available
              </p>
              <p className='text-xs text-neutral-300 dark:text-white font-semibold'>
                Advanced assessments for teams and organizations
              </p>
            </div>
          </div>
          <div className='mt-2 sm:mt-0 sm:ml-3'>
            <button
              type='button'
              onClick={() => handleClick('variant6')}
              className='inline-flex flex-wrap items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-white dark:ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white dark:text-white h-9 rounded-md px-3 bg-violet-600 dark:bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-700 w-full sm:w-auto'
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
