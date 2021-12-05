import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Error from 'next/error';

import { AppLayout } from 'components/app-layout';
import TeamPage from 'components/team-page';
import { fetcher } from 'shared/fetcher';
import { FestivalTeams, Volunteers } from 'api-typings';

interface ITeamProps {
  errorCode?: number,
  team: Array<FestivalTeams>,
  volunteers: Array<Volunteers> | undefined
}

const Team = ({ errorCode, team, volunteers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <Head>
        <title>{'Организаторы'}</title>
      </Head>
      <main>
        <TeamPage team={team} volunteers={volunteers}/>
      </main>
    </AppLayout>
  );
};

const fetchTeam = async () => {
  let data;

  try {
    data = await fetcher<Array<FestivalTeams>>('/info/about-festival/team/');
  } catch (error) {
    throw error;
  }

  return data;
};

const fetchVolunteers = async () => {
  let data;

  try {
    data = await fetcher<Array<Volunteers>>('/info/about-festival/volunteers/');
  } catch (error) {
    throw error;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<ITeamProps> = async () => {
  let result = await Promise.all([
    fetchTeam(),
    fetchVolunteers()
  ]);

  const team = result[0];
  const volunteers = result[1];

  if (!result) {
    return {
      props: {
        errorCode: 500,
        team: [],
        volunteers: []
      }
    };
  }

  return {
    props: {
      team,
      volunteers
    },
  };
};

export default Team;
