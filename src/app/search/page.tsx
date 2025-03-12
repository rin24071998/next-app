
import Form from 'next/form'
 
export default function Page() {
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input hidden defaultValue={'1234'} name="query" />
      <input name="name" />
      <button type="submit">Submit</button>
    </Form>
  )
}