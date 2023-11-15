import React from "react";

function MacrosData({ profileData }) {
  console.log(profileData);
  const { headings, rowDataSet } = profileData;
  if (!profileData) return null;
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full mt-8 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headings?.map((heading) => (
                <th key={heading} scope="col" className="px-6 py-3">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowDataSet?.map((rowData) => (
              <tr
                key={rowData.key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {rowData.key}
                </th>
                <td className="px-6 py-4">{rowData.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MacrosData;
