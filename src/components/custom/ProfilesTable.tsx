import React from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../util/dateFormatter";

import { PROFILE_PATH } from "../../constants/app.constants";

const ProfilesTable: React.FC<ProfileTableProps> = ({ profiles }) => {
  return (
    <React.Fragment>
      <table className="table table-responsive table-hover text-center">
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Full name</th>
            <th>Created date time</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile: Profile) => (
            <tr key={profile.id}>
              <td>
                {
                  <Link
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    to={`${PROFILE_PATH}/${profile.id}`}
                  >
                    {profile.id}
                  </Link>
                }
              </td>
              <td>{`${profile.lastName}, ${profile.middleName} ${profile.firstName}`}</td>
              <td>{formatDate(profile.createdDateTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ProfilesTable;
