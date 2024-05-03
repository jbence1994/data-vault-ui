import React from "react";
import { Link } from "react-router-dom";

const ProfileTable: React.FC<ProfileTableProps> = ({ columns, profiles }) => {
  return (
    <React.Fragment>
      <table className="table table-responsive table-hover text-center">
        <thead>
          <tr>
            <th>Identifier</th>
            {columns.map((column: KeyValuePair<string, string>) => (
              <th key={column.key}>{column.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile: Profile) => (
            <tr key={profile.id}>
              <td>
                {
                  <Link
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    to={`/profile/${profile.id}`}
                  >
                    {profile.id}
                  </Link>
                }
              </td>
              {columns.map((column: KeyValuePair<string, string>) => (
                <td key={`${profile.id}${column.value}`}>
                  {profile[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ProfileTable;
