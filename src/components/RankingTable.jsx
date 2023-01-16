import React from 'react'

const RankingTable = ({ name, group }) => {

  return (
    <div className='relative pt-6 mt-5'>
      <h1 className='text-3xl absolute top-0 left-10 text-primary font-bold'>{name}</h1>
      <div className="bg-gray-800 p-5 rounded-3xl">
        <table>
          <thead>
            <tr>
              <th>Top</th>
              <th>Teams</th>
              <th className='w-1/12'>Match played</th>
              <th className='w-1/12'>Win</th>
              <th className='w-1/12'>Draw</th>
              <th className='w-1/12'>Lose</th>
              <th className='w-1/12 hidden md:table-cell'>Goal For</th>
              <th className='w-1/12 hidden md:table-cell'>Goal Against</th>
              <th className='w-1/12 hidden md:table-cell'>Goal Difference</th>
              <th className='w-1/12'>Points</th>
            </tr>
          </thead>
          <tbody>
            {/* {group.map(team => {
              <tr>
                <td>{team.top}</td>
                <td className="py-2 w-1/4">{team.name}</td>
                <td className='py-2 text-end'>{team.mp}</td>
                <td className='py-2 text-end'>{team.win}</td>
                <td className='py-2 text-end'>{team.draw}</td>
                <td className='py-2 text-end'>{team.lose}</td>
                <td className='py-2 text-end hidden md:table-cell'>{team.gf}</td>
                <td className='py-2 text-end hidden md:table-cell'>{team.ga}</td>
                <td className='py-2 text-end hidden md:table-cell'>{team.gd}</td>
                <td className='py-2 text-end'>{team.point}</td>
              </tr>
            })} */}
            <tr>
              <td>1</td>
              <td className="py-2 w-1/4">Myteam</td>
              <td className='py-2 text-end'>6</td>
              <td className='py-2 text-end'>2</td>
              <td className='py-2 text-end'>1</td>
              <td className='py-2 text-end'>3</td>
              <td className='py-2 text-end hidden md:table-cell'>5</td>
              <td className='py-2 text-end hidden md:table-cell'>7</td>
              <td className='py-2 text-end hidden md:table-cell'>2</td>
              <td className='py-2 text-end'>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td className="py-2 w-1/4">Myteam</td>
              <td className='py-2 text-end'>6</td>
              <td className='py-2 text-end'>2</td>
              <td className='py-2 text-end'>1</td>
              <td className='py-2 text-end'>3</td>
              <td className='py-2 text-end hidden md:table-cell'>5</td>
              <td className='py-2 text-end hidden md:table-cell'>7</td>
              <td className='py-2 text-end hidden md:table-cell'>2</td>
              <td className='py-2 text-end'>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RankingTable