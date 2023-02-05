# PokemonTrainer

### Tasks
- [X] existing user login
- [x] create new user and saving to Trainer API
- [x] save user in sessionStorage
- [x] redirect user to "catalogue" page after sign-in
- [X] user is not able to see "catalogue" page before signing-in
- [ ] "trainer" page should list the Pokémon that the trainer has collected
- [ ] user is able to remove a Pokémon from their collection on "trainer page
- [X] the "catalogue" page lists the Pokémon name and avatar
- [X] the "add" button on each Pokémon, adds the Pokémon to the trainer’s collection, and updates the Trainer API
- [ ] visually indicate that this Pokémon has been collected
- [ ] add styling

### Getting started
- Fork the repository on GitHub.
- Clone or download your fork to your local machine.

### Making changes

Once you have your repository, you can get to work.

1. Rebase your local branches against upstream master so you are working off the latest changes:

   ```sh
   git fetch --all
   git rebase upstream/master
   ```

2. Make a new branch for your work. It helps to have a descriptive name, like `fix-fullscreen-issue`.

   ```sh
   git checkout -b my-feature master
   ```

3. Make your changes and commits to this local feature branch.

4. Repeat step 1 on your local feature branch once you're done your work, to ensure you have no conflicts with other work done since you stated.

5. Push up your local feature branch to your GitHub fork:
   ```sh
   git push --set-upstream origin my-feature
   ```
6. On GitHub, create a new PR against the upstream master branch following the advice below.

7. Once your PR is merged, ensure you keep your local branches up-to-date:
   ```sh
   git fetch --all
   git checkout master
   git rebase upstream/master
   git push -u origin master
   ```
8. Delete your local feature branch if you no longer need it:
   ```sh
   git branch -d my-feature
   ```

## Pull request guidelines

After the changes are made in your branch, you're ready to submit a pull request.
Please follow the Conventional Commits specification for writing commit messages: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

#### Considerations before submitting a pull request

- Did you manually test your new change?
- Does your pull request fix multiple issues? If so, you may consider breaking into separate pull requests.
- Expect review and discussion. If you cannot back up your changes with a good description and through review, please reconsider whether it should be done at all.

#### Each pull request should include

- a descriptive title
- a short summary of the changes
- a reference to the issue that it fixes
- steps to test the fix (if applicable)
- for design-related changes, it is helpful to include screenshots
