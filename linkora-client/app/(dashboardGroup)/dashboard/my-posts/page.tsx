
import { PostFormDialog } from '../../_components/PostFormDialog'
const UserMyPostsPage = () => {
  return (
    <div className='mx-auto max-w-7xl space-y-6 px-4 my-10 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl  font-semibold'>My Posts</h1>
          Create and manage your own news posts
        </div>

        <PostFormDialog mode="create"/>
      </div>


    </div>
  )
}

export default UserMyPostsPage