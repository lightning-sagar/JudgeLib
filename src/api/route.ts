export const config = {
  runtime: 'edge',
};

const links = [
  'https://workers-judge.onrender.com/ping',
  'https://workers-judge-1.onrender.com/ping',
  'https://workers-judge-2.onrender.com/ping',
  'https://judge-microser.onrender.com/',
];

export default async function handler() {
  const results = await Promise.all(
    links.map(async (url) => {
      try {
        const res = await fetch(url);
        console.log("working")
        return { url, status: res.ok ? 'running' : 'error' };
      } catch (err) {
        return { url, status: 'error' };
      }
    })
  );

  return new Response(JSON.stringify({ results }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
