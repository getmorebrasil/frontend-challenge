import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies } from 'nookies'

export default function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const { 'getmovies.token': token } = parseCookies(ctx)

    if (!token) return fn(ctx)

    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }
}
