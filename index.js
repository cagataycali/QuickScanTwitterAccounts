import exec from 'exec';

function splitCompanies() {
  const text = 'amplitude angellist anynines apigee appboy appgyver appneta aptible articulate assembla assently atlassian auth0 authorize authorizenet autopilot autotask avalara aweber baremetrics barricade basecrm bettercloud big-cartel';
  return new Promise((resolve) => {resolve(text.split(' '))});
}

function openBrowser(company) {
    exec(`open https://twitter.com/${company}`, function(err, out, code) {
      if (err instanceof Error)
        throw err;
      process.stderr.write(err);
      process.stdout.write(out);
      process.exit(code);
    });
}


async function fetch() {
  const companies = await splitCompanies();
  for (let company of companies) {
    openBrowser(company);
    console.log(company);
  }
}

fetch();
