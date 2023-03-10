`git add .` <- git add all

`gc -m "add github action for jest"` <- git commmit -message "lala"

`gp` (`git push`) <- git push

`git checkout -b feat/test` <- býr til og skiptir yfir/tjékkar út branch sem kallast 'feat/test'


```shell
fatal: The current branch feat/test has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feat/test

To have this happen automatically for branches without a tracking upstream, see 'push.autoSetupRemote' in 'git help config'.
```

`git push --set-upstream origin feat/test` <- trökkum við sama heiti á branchinu á origin og gerum svona.
Þannig nú tek ég branchið mitt og hendi því yfir á remote-ið.

`git checkout feat/test` <- Þá ferð yfir á þitt branch.


`git merge main` <- Þá mergar þú main branchið inn í þitt branch.


`git log` <- geri git log eftir að hafa merge-að main


***

## git remote

 ╰─ tldr git remote -v

git remote

Manage set of tracked repositories ("remotes").
More information: <https://git-scm.com/docs/git-remote>.

- Show a list of existing remotes, their names and URL:
    git remote -v

- Show information about a remote:
    git remote show remote_name

- Add a remote:
    git remote add remote_name remote_url

- Change the URL of a remote (use `--add` to keep the existing URL):
    git remote set-url remote_name new_url

- Show the URL of a remote:
    git remote get-url remote_name

- Remove a remote:
    git remote remove remote_name

- Rename a remote:
    git remote rename old_name new_name


`git remote -v` <- sjáum hver remote gittin eru, eða hvort það séu einhver.

```shell
origin git@github.com:vefforritun/vef2-2023-v1.git (fetch)
origin git@github.com:vefforritun/vef2-2023-v1.git (push)
```

`git remote remove origin` <- fjarlægjum origin remote-ið



### git remote -v á repo-inu veb3-vef2-2023 (08.03.23)

```shell
╰─ git remote -v                                                                                                                                                                                           ─╯
origin  https://github.com/viktoriaemma/veb3-vef2-2023.git (fetch)
origin  https://github.com/viktoriaemma/veb3-vef2-2023.git (push)
upstream        https://github.com/vefforritun/vef2-2023.git (fetch)
upstream        https://github.com/vefforritun/vef2-2023.git (push)
```