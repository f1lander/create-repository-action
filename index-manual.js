/**
 * This is a script that can be run manually to delete a repository.
 * author: @f1lander
 */
const { Octokit } = require("@octokit/core");

async function run() {
  try {
    const owner = "ObolNetwork";
    const repo = "app-preview--test-3";

    const octokit = new Octokit({
      auth: "",
    });
    console.log(octokit);
    await octokit.request('POST /repos/{owner}/{repo}', {
        owner,
        repo,
        private: true,
      });

    console.info("Repository created.");
  } catch (error) {
    console.log(error.message);
  }
}

run();
