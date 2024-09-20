import React from 'react'

const TableComp = () => {
  return (
<div class="max-w-[720px] mx-auto">
    
     <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
        <a target='_blank' href='https://www.material-tailwind.com/docs/html/table' class='block w-full px-4 py-2 text-center text-slate-700 transition-all '>
                More components on <b>Material Tailwind</b>.
            </a>
    </div>

    <div class="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
  <table class="w-full text-left table-auto min-w-max">
    <thead>
        <tr>
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                    Name
                </p>
            </th>
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                    Role
                </p>
            </th>
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                    Email
                </p>
            </th>
            <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                    Location
                </p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="hover:bg-slate-700">
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-100 font-semibold">
                    John Michael
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    Manager
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    john.michael@example.com
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    New York, USA
                </p>
            </td>
        </tr>
        <tr class="hover:bg-slate-700">
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-100 font-semibold">
                    Alexa Liras
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    Developer
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    alexa.liras@example.com
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    San Francisco, USA
                </p>
            </td>
        </tr>
        <tr class="hover:bg-slate-700">
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-100 font-semibold">
                    Laurent Perrier
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    Executive
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    laurent.perrier@example.com
                </p>
            </td>
            <td class="p-4 border-b border-slate-700">
                <p class="text-sm text-slate-300">
                    Paris, France
                </p>
            </td>
        </tr>
        <tr class="hover:bg-slate-700">
            <td class="p-4">
                <p class="text-sm text-slate-100 font-semibold">
                    Michael Levi
                </p>
            </td>
            <td class="p-4">
                <p class="text-sm text-slate-300">
                    Developer
                </p>
            </td>
            <td class="p-4">
                <p class="text-sm text-slate-300">
                    michael.levi@example.com
                </p>
            </td>
            <td class="p-4">
                <p class="text-sm text-slate-300">
                    London, UK
                </p>
            </td>
        </tr>
    </tbody>
  </table>
</div>
 



</div>
  )
}

export default TableComp
