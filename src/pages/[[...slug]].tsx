// import NextIndexWrapper from '..'

// next/dynamic is used to prevent breaking incompatibilities
// with SSR from window.SOME_VAR usage, if this is not used
// next/dynamic can be removed to take advantage of SSR/prerendering
import dynamic from 'next/dynamic';

import { GetStaticPathsResult } from 'next';

// try changing "ssr" to true below to test for incompatibilities, if
// no errors occur the above static import can be used instead and the
// below removed
const NextIndexWrapper = dynamic(() => import('..'), { ssr: false });

/**
 * Ensures that [[...slug]].tsx is outputed as index.html
 */
export async function getStaticPaths(): Promise<
  GetStaticPathsResult<{ slug: string[] }>
> {
  return {
    // An empty array, as per documentation, will generate one only index.html
    // ref: https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
    paths: [{ params: { slug: [] } }],
    // To have an SPA both in dev and prod mode
    fallback: process.env.NODE_ENV === 'development',
  };
}

/**
 * Empty function needed for getStaticPaths to work
 */
export async function getStaticProps() {
  return { props: {} };
}

export default function Page(props: any): JSX.Element {
  return <NextIndexWrapper {...props} />;
}
