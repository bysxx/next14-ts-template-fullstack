export default function ServerActionsPage() {
  async function create(formData: FormData) {
    'use server';

    // eslint-disable-next-line no-console
    console.log('login: ', formData.get('id'), formData.get('password'));
  }
  return (
    <main className="p-4">
      {/* @ts-ignore */}
      <form action={create} className="flex items-center gap-4">
        <label htmlFor="id">
          <span>ID:</span>
          <input className="ml-3 border px-2 py-1" type="text" name="id" />
        </label>
        <label htmlFor="password">
          <span>PW:</span>
          <input className="ml-3 border px-2 py-1" type="password" name="password" />
        </label>
        <button className="border px-2 py-1" type="submit">
          login
        </button>
      </form>
    </main>
  );
}
