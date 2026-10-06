import React from 'react'

const SlugPage =async ({params}: {
    params:Promise<{slug:string}>
}) => {

    const {slug} = await params; 
    console.log(slug, "id")

  return (
    <div>SlugPage</div>
  )
}

export default SlugPage