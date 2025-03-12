'use server'
 
export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
 
  const res = await fetch('https://api.vercel.app/posts', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('res',res.ok)
  if (!res.ok) {
    return { message: 'Failed to create post' }
  }

  const data = await res.json();
  console.log('data1',data)
  return { message: 'Successfully created post', data }
}