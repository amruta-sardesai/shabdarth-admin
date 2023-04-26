import React, { useEffect, useState } from "react";
import { getUsers } from "../../apis/users";
import { Meta } from "./Words";
import { Pagination, PaginationProps } from "antd";
export interface User {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  isActive: boolean;
}
const Users = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [meta, setMeta] = useState<Meta>({
    total: 0,
    from: 0,
    to: 0,
    perPage: 0,
    currentPage: 0,
    lastPage: 0,
  });
  useEffect(() => {
    fetchUsers({});
  }, []);

  const fetchUsers = (params: any) => {
    getUsers(params).then((res: any) => {
      setUsers(res.data.data);
      setMeta(res.data.meta);
    });
  };
  const onPaginationChange: PaginationProps["onChange"] = (page, pageSize) => {
    fetchUsers({ page, per_page: pageSize });
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-primary hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Mobile
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((i) => (
                    <tr key={i.id}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {i.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.email}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.mobile}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.isActive ? (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-800 rounded-md bg-red-50 ring-1 ring-inset ring-red-600/20">
                            Inactive
                          </span>
                        )}
                      </td>
                      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, Lindsay Walton</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-10">
        <Pagination
          className=""
          defaultCurrent={1}
          defaultPageSize={20}
          onChange={onPaginationChange}
          total={meta.total}
        />
      </div>
    </div>
  );
};

export default Users;
