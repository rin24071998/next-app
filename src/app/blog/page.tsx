import { Form } from '../ui/form';
import Button1 from './button';
import Button2 from './button2';
export async function generateMetadata() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();
  return {
    title: posts.length > 0 ? posts[0]?.title : 'Trang chủ - Website của bạn',
    description: 'Mô tả này sẽ xuất hiện trên Google cho trang chủ.',
    creator: 'Jiachi Liu',
    openGraph: {
      images:
        'data:image/jpeg;base64,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',
    },
  };
}
// async function getData() {
//   const res = await fetch('https://api.vercel.app/blog');
//   console.log('res', res.status);
//   return res.json();
// }
export default async function Page() {
  //   const posts = await getData();
  return (
    <div>
      {/* <ul>
        {posts.map((post: Record<string, any>) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul> */}
      <div>
        <Button1 />
        <Button2 />
        <Form />
        {/* <Image 
            src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg"
            alt="Next.js logo"
            loading='lazy'
            width={500}
            height={500}
        /> */}
        <article>
          <img
            className="float-left w-100"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
          />
          <img
            className="float-right w-125"
            src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90"
          />
          <p className="clear-left">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </article>
      </div>
    </div>
  );
}
