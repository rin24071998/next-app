'use server'
 
export async function createPost(formData: FormData) {
    const title = formData.get('title') as string | null;
    const content = formData.get('content') as string | null;

    if (!title || !content) {
        return { message: 'Title and content are required' };
    }

    try {
        const res = await fetch('https://api.vercel.app/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            console.error('Failed to create post:', res.statusText);
            return { message: 'Failed to create post' };
        }

        const data = await res.json();
        return { message: 'Successfully created post', data };
    } catch (error) {
        console.error('Error creating post:', error);
        return { message: 'An error occurred while creating the post' };
    }
}