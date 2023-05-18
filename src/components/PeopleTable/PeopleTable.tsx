import { FC } from 'react';
import { Person } from '../../types';
import { Loader } from '../Loader';
import { PersonLink } from '../PersonLink';

interface Props {
  people: Person[];
  isLoading: boolean;
}

export const PeopleTable: FC<Props> = ({
  people,
  isLoading,
}) => {

  return (
    <div className="container">
      <div className="block">
        <div className="box table-container">

          {
            isLoading
              ? <Loader />
              : (
                <table
                  data-cy="peopleTable"
                  // eslint-disable-next-line
                  className="table is-striped is-hoverable is-narrow is-fullwidth"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Sex</th>
                      <th>Born</th>
                      <th>Died</th>
                      <th>Mother</th>
                      <th>Father</th>
                    </tr>
                  </thead>

                  <tbody>
                    {people.map(person => (
                      <PersonLink person={person} />
                    ))}
                  </tbody>
                </table>
              )
          }
        </div>
      </div>
    </div>
  );
};
