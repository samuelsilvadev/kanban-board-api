export function read() {
  return JSON.parse(
    Deno.readTextFileSync(
      Deno.realPathSync(`${Deno.cwd()}/database/data.json`),
    ),
  );
}
