import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const{page , handlePageChange ,totalPages} = useContext(AppContext)

  return (
    <div className='w-full h-[50px] text-center border-b-2 p-2 shadow-md sticky bottom-0 bg-blue-50 shadow-blue-200
        flex justify-evenly
    '>
      <div className='flex gap-x-2 jystify-center items-center p-2'>
        { page > 1 &&
            <button onClick={() => handlePageChange(page - 1)}
                className='bg-blue-400 text-white rounded-md px-4 py-1'
            >
                Previous
            </button>
        }
        { page < totalPages &&
            <button onClick={() => handlePageChange(page + 1)}
                className='bg-blue-400 text-white rounded-md px-4 py-1'
            >
                Next
            </button>
        }
      </div>

      <p  className='text-sm pt-2'>
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Pagination
