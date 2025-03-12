'use client'
import { useActionState, startTransition } from 'react';
import { createPost } from '../lib/actions';

export function Form() {
  const [state, action, pending] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any, formData: FormData) => createPost(formData), 
    null
  );

  return (
    <form>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button
        onClick={(e) => {
          e.preventDefault();
          const form = e.currentTarget.closest('form');
          if (form) {
            const formData = new FormData(form);
            startTransition(() => {
              action(formData);
            });
          }
        }}
        disabled={pending}
      >
        Create Post
      </button>
      {state?.message && <p aria-live="polite">{state.message}</p>}
    </form>
  );
}
