import React from "react";

const ProfileTable: React.FC<ProfileTableProps> = ({ columns, profiles }) => {
  return (
    <React.Fragment>
      <table className="table table-responsive table-hover text-center">
        <thead>
          <tr>
            {columns.map((column: KeyValuePair<string, string>) => (
              <th key={column.key}>{column.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile: Profile) => (
            <tr key={profile.id}>
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
